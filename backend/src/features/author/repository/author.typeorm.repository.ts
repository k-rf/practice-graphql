import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Author } from "../domain/author";
import { AuthorId } from "../domain/author-id";
import { AuthorName } from "../domain/author-name";
import { AuthorRepository } from "../domain/author.repository";
import { Author as AuthorEntity } from "../repository/author.entity";

export class AuthorTypeOrmRepository implements AuthorRepository {
  constructor(@InjectRepository(AuthorEntity) private repository: Repository<AuthorEntity>) {}

  async find(): Promise<Author> {
    const result = await this.repository.find();
    const author = result.at(0);

    if (author) {
      return new Author({
        id: new AuthorId(author.id),
        lastName: author.lastName ? new AuthorName(author.lastName) : undefined,
        firstName: author.firstName ? new AuthorName(author.firstName) : undefined,
      });
    }

    return new Author({
      id: new AuthorId(result.at(0)?.id),
    });
  }
  async save(_value: Author): Promise<void> {}
}

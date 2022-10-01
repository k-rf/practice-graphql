import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { optional, required } from "~/util/class-mapper";

import { Author } from "../core/domain/author";
import { AuthorId } from "../core/domain/author-id";
import { AuthorName } from "../core/domain/author-name";
import { AuthorRepository } from "../core/domain/author.repository";
import { AuthorEntity } from "../repository/author.entity";

export class AuthorTypeOrmRepository implements AuthorRepository {
  constructor(@InjectRepository(AuthorEntity) private repository: Repository<AuthorEntity>) {}

  async find() {
    const result = await this.repository.find();

    return result.map((author) => {
      return new Author({
        id: required(AuthorId, author.id),
        firstName: optional(AuthorName, author.firstName),
        lastName: optional(AuthorName, author.lastName),
      });
    });
  }

  async findById(id: AuthorId): Promise<Author> {
    const result = await this.repository.findOne({ where: { id: id.value } });

    if (result) {
      return new Author({
        id: required(AuthorId, result.id),
        firstName: optional(AuthorName, result.firstName),
        lastName: optional(AuthorName, result.lastName),
      });
    }

    return new Author({
      id: required(AuthorId, undefined),
    });
  }

  async save(author: Author): Promise<void> {
    const data = new AuthorEntity();
    data.id = author.value.id.value;
    data.firstName = author.value.firstName?.value;
    data.lastName = author.value.lastName?.value;

    await this.repository.save(data);
  }
}

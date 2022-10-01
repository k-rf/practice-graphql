import { Injectable } from "@nestjs/common";

import { AuthorId } from "../domain/author-id";
import { AuthorRepository } from "../domain/author.repository";

import { GetAuthorInput } from "./get-author.input";
import { GetAuthorOutput } from "./get-author.output";

@Injectable()
export class GetAuthorService {
  constructor(private repository: AuthorRepository) {}

  async handle(input: GetAuthorInput): Promise<GetAuthorOutput> {
    const authorId = new AuthorId(input.value.id);

    const result = await this.repository.findById(authorId);

    return new GetAuthorOutput({
      id: result.value.id.value,
      firstName: result.value.firstName?.value,
      lastName: result.value.lastName?.value,
    });
  }
}

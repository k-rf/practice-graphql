import { Injectable } from "@nestjs/common";

import { optional, required } from "~/util/class-mapper";

import { Author } from "../domain/author";
import { AuthorId } from "../domain/author-id";
import { AuthorName } from "../domain/author-name";
import { AuthorRepository } from "../domain/author.repository";

import { CreateAuthorInput } from "./create-author.input";
import { CreateAuthorOutput } from "./create-author.output";

@Injectable()
export class CreateAuthorService {
  constructor(private repository: AuthorRepository) {}

  async handle(input: CreateAuthorInput) {
    const author = new Author({
      id: required(AuthorId, undefined),
      firstName: optional(AuthorName, input.value.firstName),
      lastName: optional(AuthorName, input.value.lastName),
    });

    await this.repository.save(author);

    return new CreateAuthorOutput({ id: author.value.id.value });
  }
}

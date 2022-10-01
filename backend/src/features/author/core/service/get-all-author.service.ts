import { Injectable } from "@nestjs/common";

import { AuthorRepository } from "../domain/author.repository";

import { GetAllAuthorOutput } from "./get-all-author.output";

@Injectable()
export class GetAllAuthorService {
  constructor(private repository: AuthorRepository) {}

  async handle(): Promise<GetAllAuthorOutput> {
    const result = await this.repository.find();

    return new GetAllAuthorOutput(
      result.map((author) => ({
        id: author.value.id.value,
        firstName: author.value.firstName?.value,
        lastName: author.value.lastName?.value,
      }))
    );
  }
}

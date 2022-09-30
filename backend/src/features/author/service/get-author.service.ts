import { Injectable } from "@nestjs/common";

import { AuthorRepository } from "../domain/author.repository";

@Injectable()
export class GetAuthorService {
  constructor(private repository: AuthorRepository) {}

  async handle() {
    const result = await this.repository.find();

    return {
      id: result._.id._,
      firstName: result._.firstName?._,
      lastName: result._.lastName?._,
    };
  }
}

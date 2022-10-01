import { Injectable } from "@nestjs/common";

import { AuthorId } from "~/features/author/core/domain/author-id";

import { PostRepository } from "../domain/post.repository";

import { GetPostInput } from "./get-post.input";
import { GetPostOutput } from "./get-post.output";

@Injectable()
export class GetPostService {
  constructor(private repository: PostRepository) {}

  async handle(input: GetPostInput): Promise<GetPostOutput[]> {
    const authorId = new AuthorId(input.value.authorId);

    const result = await this.repository.find({ authorId });

    return result.map((output) => {
      return new GetPostOutput({
        id: output.value.id.value,
        title: output.value.title?.value,
        votes: output.value.votes?.value,
      });
    });
  }
}

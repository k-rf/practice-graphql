import { Injectable } from "@nestjs/common";

import { AuthorId } from "~/features/author/core/domain/author-id";

import { Post } from "./post";

export type PostFindCriteria = {
  authorId?: AuthorId;
};

@Injectable()
export abstract class PostRepository {
  abstract find(criteria?: PostFindCriteria): Promise<Post[]>;
}

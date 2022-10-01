import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as DataLoader from "dataloader";
import { In, Repository } from "typeorm";

import { AuthorId } from "~/features/author/core/domain/author-id";
import { required, optional } from "~/util/class-mapper";

import { Post } from "../core/domain/post";
import { PostId } from "../core/domain/post-id";
import { PostTitle } from "../core/domain/post-title";
import { PostVotes } from "../core/domain/post-votes";
import { PostFindCriteria, PostRepository } from "../core/domain/post.repository";

import { PostEntity } from "./post.entity";

@Injectable({ scope: Scope.REQUEST })
export class PostTypeOrmRepository
  extends DataLoader<PostFindCriteria | undefined, PostEntity[]>
  implements PostRepository
{
  constructor(@InjectRepository(PostEntity) protected repository: Repository<PostEntity>) {
    super(async (keys) => {
      const authorIds = keys
        .map((key) => key?.authorId)
        .filter((authorId): authorId is AuthorId => Boolean(authorId))
        .map((authorId) => authorId.value);

      const result = await this.repository.find({
        where: { author: { id: In(authorIds) } },
        relations: { author: true },
      });

      return keys.map((criteria) =>
        result.filter((post) => {
          return post.author.id === criteria?.authorId?.value;
        })
      );
    });
  }

  async find(criteria?: PostFindCriteria): Promise<Post[]> {
    return (await this.load(criteria)).map(
      (post) =>
        new Post({
          id: required(PostId, post.id),
          title: optional(PostTitle, post.title),
          votes: optional(PostVotes, post.votes),
        })
    );
  }
}

import { PostId } from "~/features/post/core/domain/post-id";
import { Collection } from "~/shared/collection";

export class PostIdCollection extends Collection<PostId, "PostIdCollection"> {
  readonly type = "PostIdCollection";

  validate(value: PostId[]): PostId[] {
    return value;
  }
}

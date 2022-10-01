import { Entity } from "~/shared/entity";

import { PostId } from "./post-id";
import { PostTitle } from "./post-title";
import { PostVotes } from "./post-votes";

type Props = {
  id: PostId;
  title?: PostTitle;
  votes?: PostVotes;
};

export class Post extends Entity<Props, "Post"> {
  readonly type = "Post";

  protected validate(value: Props): Props {
    return value;
  }
}

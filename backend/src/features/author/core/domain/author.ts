import { Entity } from "~/shared/entity";

import { AuthorId } from "./author-id";
import { AuthorName } from "./author-name";
import { PostIdCollection } from "./post-id.collection";

type Props = {
  id: AuthorId;
  firstName?: AuthorName;
  lastName?: AuthorName;
  postIds?: PostIdCollection;
};

export class Author extends Entity<Props, "Author"> {
  readonly type = "Author";

  protected validate(value: Props): Props {
    return value;
  }
}

import { Entity } from "~/shared/entity";

import { AuthorId } from "./author-id";
import { AuthorName } from "./author-name";

type Props = {
  id: AuthorId;
  firstName?: AuthorName;
  lastName?: AuthorName;
};

export class Author extends Entity<Props, "Author"> {
  readonly type = "Author";

  protected validate(value: Props): Props {
    return value;
  }
}

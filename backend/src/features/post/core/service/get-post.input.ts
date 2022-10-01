import { Input } from "~/shared/input";

type Props = {
  authorId: string;
};

export class GetPostInput extends Input<Props, "GetPostInput"> {
  readonly type = "GetPostInput";
}

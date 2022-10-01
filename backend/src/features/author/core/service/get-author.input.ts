import { Input } from "~/shared/input";

type Props = {
  id: string;
};

export class GetAuthorInput extends Input<Props, "GetAuthorInput"> {
  readonly type = "GetAuthorInput";
}

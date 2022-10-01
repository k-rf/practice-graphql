import { Input } from "~/shared/input";

type Props = {
  firstName?: string;
  lastName?: string;
};

export class CreateAuthorInput extends Input<Props, "CreateAuthorInput"> {
  readonly type = "CreateAuthorInput";
}

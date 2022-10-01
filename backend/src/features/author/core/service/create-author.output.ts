import { Output } from "~/shared/output";

type Props = {
  id: string;
};

export class CreateAuthorOutput extends Output<Props, "CreateAuthorOutput"> {
  readonly type = "CreateAuthorOutput";
}

import { Output } from "~/shared/output";

type Props = {
  id: string;
  firstName?: string;
  lastName?: string;
};

export class GetAuthorOutput extends Output<Props, "GetAuthorOutput"> {
  readonly type = "GetAuthorOutput";
}

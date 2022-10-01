import { Output } from "~/shared/output";

type Props = {
  id: string;
  firstName?: string;
  lastName?: string;
}[];

export class GetAllAuthorOutput extends Output<Props, "GetAllAuthorOutput"> {
  readonly type = "GetAllAuthorOutput";
}

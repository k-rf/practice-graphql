import { Output } from "~/shared/output";

type Props = {
  id: string;
  title?: string;
  votes?: number;
};

export class GetPostOutput extends Output<Props, "GetPostOutput"> {
  readonly type = "GetPostOutput";
}

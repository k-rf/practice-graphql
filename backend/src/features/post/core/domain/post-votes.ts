import { z } from "zod";

import { DomainPrimitive } from "~/shared/domain-primitive";

export class PostVotes extends DomainPrimitive<number, "PostVotes"> {
  readonly type = "PostVotes";

  protected validate(value: number): number {
    return z.number().min(0).parse(value);
  }
}

import { z } from "zod";

import { DomainPrimitive } from "~/shared/domain-primitive";

export class PostTitle extends DomainPrimitive<string, "PostTitle"> {
  readonly type = "PostTitle";

  protected validate(value: string): string {
    return z.string().parse(value);
  }
}

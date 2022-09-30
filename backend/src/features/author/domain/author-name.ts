import { z } from "zod";

import { DomainPrimitive } from "~/shared/domain-primitive";

export class AuthorName extends DomainPrimitive<string, "AuthorName"> {
  readonly type = "AuthorName";

  protected validate(value?: string): string {
    return z.string().max(30).parse(value);
  }
}

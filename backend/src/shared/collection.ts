import { DomainPrimitive, Primitive } from "~/shared/domain-primitive";

export abstract class Collection<T extends DomainPrimitive<Primitive, string>, U extends string> {
  abstract readonly type: U;

  constructor(readonly value: T[]) {
    this.value = this.validate(value);
  }

  abstract validate(value: T[]): T[];
}

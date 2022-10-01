type Frozen<T> = { readonly [K in keyof T]: Frozen<T[K]> };

export abstract class Output<T, U extends string> {
  private readonly brand = "Output";
  abstract readonly type: U;

  readonly value: Frozen<T>;

  constructor(value: T) {
    this.value = value;
  }
}

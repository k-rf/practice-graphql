import { Injectable } from "@nestjs/common";

import { Author } from "./author";

@Injectable()
export abstract class AuthorRepository {
  abstract find(): Promise<Author>;
  abstract save(value: Author): Promise<void>;
}

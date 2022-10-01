import { Injectable } from "@nestjs/common";

import { Author } from "./author";
import { AuthorId } from "./author-id";

@Injectable()
export abstract class AuthorRepository {
  abstract find(): Promise<Author[]>;
  abstract findById(id: AuthorId): Promise<Author>;
  abstract save(value: Author): Promise<void>;
}

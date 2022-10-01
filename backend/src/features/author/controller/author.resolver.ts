import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CreateAuthorInput } from "../core/service/create-author.input";
import { CreateAuthorService } from "../core/service/create-author.service";
import { GetAllAuthorService } from "../core/service/get-all-author.service";
import { GetAuthorInput } from "../core/service/get-author.input";
import { GetAuthorService } from "../core/service/get-author.service";

import { AuthorModel } from "./author.model";
import { CreateAuthorModelInput } from "./create-author.input";

@Resolver()
export class AuthorResolver {
  constructor(
    private getAuthorService: GetAuthorService,
    private getAllAuthorService: GetAllAuthorService,
    private createAuthorService: CreateAuthorService
  ) {}

  @Query(() => AuthorModel)
  async author(@Args("id", { type: () => ID }) id: string): Promise<AuthorModel> {
    const result = await this.getAuthorService.handle(new GetAuthorInput({ id }));

    return { ...result.value };
  }

  @Query(() => [AuthorModel])
  async authorAll(): Promise<AuthorModel[]> {
    const result = await this.getAllAuthorService.handle();

    return result.value.map((e) => ({ ...e }));
  }

  @Mutation(() => String)
  async createAuthor(@Args("data") data: CreateAuthorModelInput) {
    return (await this.createAuthorService.handle(new CreateAuthorInput({ ...data }))).value.id;
  }
}

import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";

import { AuthorEntity } from "~/features/author/repository/author.entity";

@Entity({ name: "post" })
export class PostEntity {
  @PrimaryColumn()
  id!: string;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  votes?: number;

  @ManyToOne(() => AuthorEntity)
  author!: AuthorEntity;
}

import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "author" })
export class AuthorEntity {
  @PrimaryColumn()
  id!: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;
}

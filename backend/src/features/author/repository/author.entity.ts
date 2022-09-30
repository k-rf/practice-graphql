import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Author {
  @PrimaryColumn()
  id!: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;
}

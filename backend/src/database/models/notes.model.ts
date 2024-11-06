import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Notes extends Model<Notes> {
  @Column
  title: string;

  @Column
  description: string;

  @ForeignKey(() => User) // Foreign key to reference User
  @Column
  userId: number;

  @BelongsTo(() => User) // Many-to-One relationship
  user: User;
}

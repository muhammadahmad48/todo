import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Search extends Model<Search> {
  @Column
  query: string;

  @ForeignKey(() => User) // Foreign key to reference User
  @Column
  userId: number;

  @BelongsTo(() => User) // Many-to-One relationship
  user: User;
}

import { Column,HasMany, Model, Table } from 'sequelize-typescript';
import { Notes } from './notes.model';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  address: string;

  @Column
  username: string;

  @HasMany(() => Notes) // One-to-Many relationship
  notes: Notes[];     
}

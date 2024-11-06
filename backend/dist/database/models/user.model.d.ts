import { Model } from 'sequelize-typescript';
import { Notes } from './notes.model';
export declare class User extends Model<User> {
    name: string;
    email: string;
    password: string;
    address: string;
    username: string;
    notes: Notes[];
}

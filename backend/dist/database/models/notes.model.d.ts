import { Model } from 'sequelize-typescript';
import { User } from './user.model';
export declare class Notes extends Model<Notes> {
    title: string;
    description: string;
    userId: number;
    user: User;
}

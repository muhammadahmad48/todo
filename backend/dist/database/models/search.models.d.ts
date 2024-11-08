import { Model } from 'sequelize-typescript';
import { User } from './user.model';
export declare class Search extends Model<Search> {
    query: string;
    userId: number;
    user: User;
}

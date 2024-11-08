// eslint-disable-next-line @typescript-eslint/no-require-imports
require('ts-node/register');
import { SequelizeOptions } from 'sequelize-typescript';
import config from './config';
import { User } from '../models/user.model';
import { Notes } from '../models/notes.model';
import { Search } from '../models/search.models';

const sequelizeConfig=config[process.env.NODE_ENV];
const connection:SequelizeOptions={...sequelizeConfig,models:[User,Notes,Search],autoLoadModels: true, synchronize:false,logging: console.log}
export default connection;
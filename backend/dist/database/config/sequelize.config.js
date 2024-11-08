"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('ts-node/register');
const config_1 = __importDefault(require("./config"));
const user_model_1 = require("../models/user.model");
const notes_model_1 = require("../models/notes.model");
const search_models_1 = require("../models/search.models");
const sequelizeConfig = config_1.default[process.env.NODE_ENV];
const connection = { ...sequelizeConfig, models: [user_model_1.User, notes_model_1.Notes, search_models_1.Search], autoLoadModels: true, synchronize: false, logging: console.log };
exports.default = connection;
//# sourceMappingURL=sequelize.config.js.map
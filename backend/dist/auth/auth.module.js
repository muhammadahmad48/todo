"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModuleModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../database/models/user.model");
let AuthModuleModule = class AuthModuleModule {
};
exports.AuthModuleModule = AuthModuleModule;
exports.AuthModuleModule = AuthModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([user_model_1.User]),
        ],
        controllers: [auth_controller_1.AuthModuleController],
        providers: [auth_service_1.AuthModuleService],
    })
], AuthModuleModule);
//# sourceMappingURL=auth.module.js.map
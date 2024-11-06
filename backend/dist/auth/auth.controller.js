"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModuleController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const data_dto_1 = require("./dto/data.dto");
let AuthModuleController = class AuthModuleController {
    constructor(authModuleService) {
        this.authModuleService = authModuleService;
    }
    async login(loginDto, res) {
        try {
            const userResponse = await this.authModuleService.findByCredentials(loginDto);
            return res.status(common_1.HttpStatus.OK).json(userResponse);
        }
        catch (error) {
            throw error;
        }
    }
    async signup(signupDto, res) {
        try {
            const userResponse = await this.authModuleService.create(signupDto);
            return res.status(common_1.HttpStatus.OK).json(userResponse);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.AuthModuleController = AuthModuleController;
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [data_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthModuleController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [data_dto_1.SignupDto, Object]),
    __metadata("design:returntype", Promise)
], AuthModuleController.prototype, "signup", null);
exports.AuthModuleController = AuthModuleController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthModuleService])
], AuthModuleController);
//# sourceMappingURL=auth.controller.js.map
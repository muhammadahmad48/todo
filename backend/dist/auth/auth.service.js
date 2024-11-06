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
exports.AuthModuleService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../database/models/user.model");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthModuleService = class AuthModuleService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async findByCredentials(loginData) {
        const { email, password } = loginData;
        const user = await this.userRepository.findOne({ where: { email: email } });
        if (!user) {
            throw new common_1.HttpException({
                message: 'User Not Exist',
                status: false,
            }, common_1.HttpStatus.NOT_FOUND);
        }
        else if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { id: user.id, email: user.email };
            return {
                message: 'Login successful',
                data: { userId: user.id },
                access_token: await this.jwtService.signAsync(payload),
                status: true,
            };
        }
        throw new common_1.HttpException({
            message: 'Password does not match',
            status: false,
        }, common_1.HttpStatus.UNAUTHORIZED);
    }
    async create(signupData) {
        const { email, address, name } = signupData;
        const existingUser = await this.userRepository.findOne({
            where: { email: email },
        });
        if (existingUser) {
            throw new common_1.HttpException({
                message: 'Email already exists',
                status: false,
            }, common_1.HttpStatus.CONFLICT);
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(signupData.password, saltRounds);
        const newUser = await this.userRepository.create({
            email: email,
            password: hashedPassword,
            name: name,
            address: address,
        });
        const { password, ...user } = newUser.get();
        const payload = { id: user.id, email: user.email };
        return {
            message: 'User created successfully',
            status: true,
            data: { userId: user.id },
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthModuleService = AuthModuleService;
exports.AuthModuleService = AuthModuleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthModuleService);
//# sourceMappingURL=auth.service.js.map
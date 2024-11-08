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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const todo_dto_1 = require("./dto/todo.dto");
const auth_guard_1 = require("../common/guards/auth.guard");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async createTodo(todoData, res, req) {
        try {
            const todoResponse = await this.todoService.create(todoData, req.user);
            res.status(common_1.HttpStatus.OK).json(todoResponse);
        }
        catch (error) {
            throw error;
        }
    }
    async getTodos(res, req) {
        try {
            const todos = await this.todoService.getAllTodos(req.user);
            return res.status(200).json(todos);
        }
        catch (error) {
            throw error;
        }
    }
    async getTodo(res, req, params) {
        try {
            const { id } = params;
            const todos = await this.todoService.getTodo(id);
            return res.status(200).json(todos);
        }
        catch (error) {
            throw error;
        }
    }
    async editTodo(res, params, todoData) {
        try {
            const { id } = params;
            const todos = await this.todoService.editTodo(todoData, id);
            return res.status(200).json(todos);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteTodo(params, res) {
        try {
            const { id } = params;
            const todos = await this.todoService.delete(id);
            return res.status(200).json(todos);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.TodoDto, Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "editTodo", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodo", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map
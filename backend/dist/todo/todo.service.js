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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const notes_model_1 = require("../database/models/notes.model");
let TodoService = class TodoService {
    constructor(notesRepository) {
        this.notesRepository = notesRepository;
    }
    async create(todoData, user) {
        const { id } = user;
        const note = await this.notesRepository.create({ ...todoData, userId: id });
        ;
        return { message: 'Note created successfully', status: true, data: note };
    }
    async getAllTodos(user) {
        const { id } = user;
        const notes = await this.notesRepository.findAll({ where: { userId: id } });
        return { data: notes, status: true, message: 'Notes Fetch Succesffully ' };
    }
    async getTodo(todoId) {
        const note = await this.notesRepository.findOne({ where: { id: todoId } });
        return { data: note, status: true, message: 'Todo Fetch Succesffully ' };
    }
    async editTodo(todoData, todoId) {
        const [noteCount] = await this.notesRepository.update({ ...todoData }, {
            where: {
                id: todoId,
            },
        });
        if (noteCount === 0) {
            throw new common_1.HttpException({ message: 'Todo not Updated', status: false }, common_1.HttpStatus.NOT_FOUND);
        }
        return { data: noteCount, status: true, message: 'Todo Updated Succesffully ' };
    }
    async delete(todoId) {
        const deletedCount = await this.notesRepository.destroy({ where: { id: todoId } });
        if (deletedCount === 0) {
            throw new common_1.HttpException({ message: 'Todo not found', status: false }, common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Todo Deleted successfully', status: true };
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(notes_model_1.Notes)),
    __metadata("design:paramtypes", [Object])
], TodoService);
//# sourceMappingURL=todo.service.js.map
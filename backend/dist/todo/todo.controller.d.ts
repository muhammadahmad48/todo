import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(todoData: TodoDto, res: any, req: any): Promise<void>;
    getTodos(res: any, req: any): Promise<any>;
    getTodo(res: any, req: any, params: any): Promise<any>;
    editTodo(res: any, params: any, todoData: any): Promise<any>;
    deleteTodo(params: any, res: any): Promise<any>;
}

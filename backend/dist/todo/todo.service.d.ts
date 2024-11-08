import { TodoDto } from './dto/todo.dto';
import { Notes } from 'src/database/models/notes.model';
export declare class TodoService {
    private readonly notesRepository;
    constructor(notesRepository: typeof Notes);
    create(todoData: TodoDto, user: any): Promise<{
        message: string;
        status: boolean;
        data: Notes;
    }>;
    getAllTodos(user: any): Promise<{
        data: Notes[];
        status: boolean;
        message: string;
    }>;
    getTodo(todoId: number): Promise<{
        data: Notes;
        status: boolean;
        message: string;
    }>;
    editTodo(todoData: any, todoId: number): Promise<{
        data: number;
        status: boolean;
        message: string;
    }>;
    delete(todoId: number): Promise<{
        message: string;
        status: boolean;
    }>;
}

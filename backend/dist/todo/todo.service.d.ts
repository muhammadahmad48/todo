import { TodoDto } from './dto/todo.dto';
import { Notes } from 'src/database/models/notes.model';
export declare class TodoService {
    private readonly notesRepository;
    constructor(notesRepository: typeof Notes);
    create(todoData: TodoDto, user: any): Promise<{
        message: string;
        status: boolean;
        note: Notes;
    }>;
    getAllTodos(user: any): Promise<{
        data: Notes[];
        status: boolean;
        message: string;
    }>;
    getTodo(todoId: Number): Promise<{
        data: Notes;
        status: boolean;
        message: string;
    }>;
    editTodo(todoData: any, todoId: Number): Promise<{
        data: number;
        status: boolean;
        message: string;
    }>;
    delete(todoId: Number): Promise<{
        message: string;
        status: boolean;
    }>;
}

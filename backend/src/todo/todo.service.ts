import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Notes } from 'src/database/models/notes.model';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Notes) private readonly notesRepository:typeof Notes){}    
    
    async create(todoData:TodoDto,user:any){
        const {id}=user;
        const note = await this.notesRepository.create({...todoData,userId:id});;
        return {message: 'Note created successfully',status:true,data:note};

    }


    async getAllTodos(user:any){
        const {id}=user;
        const notes = await this.notesRepository.findAll({where:{userId:id}});
        return {data:notes,status:true,message:'Notes Fetch Succesffully '}
    }



    async getTodo(todoId:number){

        const note = await this.notesRepository.findOne({where:{id:todoId}});
        return {data:note,status:true,message:'Todo Fetch Succesffully '}
    
    }


    async editTodo(todoData:any,todoId:number){
        const [noteCount] = await this.notesRepository.update(
            { ...todoData },
            {
              where: {
                id: todoId,
              },
            },
        );

        if (noteCount === 0) {
            throw new HttpException(
              { message: 'Todo not Updated', status: false },
              HttpStatus.NOT_FOUND,
            );
        }

        return {data:noteCount,status:true,message:'Todo Updated Succesffully '}
    
    }

    async delete(todoId:number){
        const deletedCount = await this.notesRepository.destroy({where:{id:todoId}});
        
        if (deletedCount === 0) {
            throw new HttpException(
              { message: 'Todo not found', status: false },
              HttpStatus.NOT_FOUND,
            );
        }

        return {message: 'Todo Deleted successfully',status:true};

    }
}

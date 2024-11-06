import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Notes } from 'src/database/models/notes.model';
import { User } from 'src/database/models/user.model';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Notes) private readonly notesRepository:typeof Notes){}    
    
    async create(todoData:TodoDto,user:any){
        const {id}=user;
        const note = await this.notesRepository.create({...todoData,userId:id});;
        return {message: 'Note created successfully',status:true,note:note};

    }


    async getAllTodos(user:any){
        const {id}=user;
        const notes = await this.notesRepository.findAll({where:{userId:id}});
        return {data:notes,status:true,message:'Notes Fetch Succesffully '}
    }



    async getTodo(todoId:Number){

        const note = await this.notesRepository.findOne({where:{id:todoId}});
        return {data:note,status:true,message:'Note Fetch Succesffully '}
    
    }


    async editTodo(todoData:any,todoId:Number){
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
              { message: 'Note not Updated', status: false },
              HttpStatus.NOT_FOUND,
            );
        }

        return {data:noteCount,status:true,message:'Note Updated Succesffully '}
    
    }

    async delete(todoId:Number){
        const deletedCount = await this.notesRepository.destroy({where:{id:todoId}});
        
        if (deletedCount === 0) {
            throw new HttpException(
              { message: 'Note not found', status: false },
              HttpStatus.NOT_FOUND,
            );
        }

        return {message: 'Note Deleted successfully',status:true};

    }
}

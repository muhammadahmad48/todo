import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notes } from 'src/database/models/notes.model';
import { User } from 'src/database/models/user.model';

@Module({
  imports:[SequelizeModule.forFeature([Notes,User])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}

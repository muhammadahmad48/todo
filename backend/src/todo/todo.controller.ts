import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Response,
  Request,
  UseGuards,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/')
  async createTodo(@Body() todoData: TodoDto, @Response() res,@Request() req) {
    try {

      const todoResponse = await this.todoService.create(todoData,req.user);
      res.status(HttpStatus.OK).json(todoResponse);

    } catch (error) {

      throw error

    }
  }

  @Get('/')
  async getTodos(@Response() res,@Request() req) {
    try {

      const todos=await this.todoService.getAllTodos(req.user);
      return res.status(200).json(todos)
    
    } catch (error) {

      throw error

    }
  }

  @Get('/:id')
  async getTodo(@Response() res,@Request() req,@Param() params) {
    try {
      const {id}=params;
      const todos=await this.todoService.getTodo(id);
      return res.status(200).json(todos)
    
    } catch (error) {

      throw error

    }
  }

  @Put('/:id')
  async editTodo(@Response() res,@Param() params,@Body() todoData) {
    try {
      const {id}=params;
      const todos=await this.todoService.editTodo(todoData,id);
      return res.status(200).json(todos)
    
    } catch (error) {

      throw error

    }
  }


  @Delete('/:id')
  async deleteTodo(@Param() params: any,@Response() res) {
    try {
      const {id}=params
      const todos=await this.todoService.delete(id);
      return res.status(200).json(todos)
    
    } catch (error) {

      throw error

    }
  }
}

import { Response,Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, ConflictException, UnauthorizedException, HttpException } from '@nestjs/common';
import { AuthModuleService } from './auth.service';
import { LoginDto, SignupDto } from './dto/data.dto';

@Controller('auth')
export class AuthModuleController {
  constructor(private readonly authModuleService: AuthModuleService) {}


  @Post('/login')
  async login(@Body() loginDto:LoginDto,@Response() res) {
    try{

      const userResponse=await this.authModuleService.findByCredentials(loginDto);        
      return res.status(HttpStatus.OK).json(userResponse)

    }catch(error){

      throw error

    }

  }

  @Post('/signup')
  async signup(@Body() signupDto:SignupDto,@Response() res) {
    try{

      const userResponse = await this.authModuleService.create(signupDto);
      return res.status(HttpStatus.OK).json(userResponse)

    }catch(error){

      throw error
    
    }

  }

}
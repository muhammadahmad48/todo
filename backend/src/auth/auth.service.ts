import {HttpException,HttpStatus,Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/models/user.model';
import { LoginDto, SignupDto } from './dto/data.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthModuleService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  async findByCredentials(loginData: LoginDto): Promise<any> {
    const { email, password } = loginData;
    const user = await this.userRepository.findOne({ where: { email: email } });

    if (!user) {
      
      throw new HttpException(
        {
            message: 'User Not Exist',
            status: false,
        },
        HttpStatus.NOT_FOUND, // Unauthorized status code
      );

    } else if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { id: user.id, email: user.email };

      return {
        message: 'Login successful',
        data: { userId: user.id },
        access_token: await this.jwtService.signAsync(payload),
        status: true,
      };
    }

    throw new HttpException(
      {
        message: 'Password does not match',
        status: false,
      },
      HttpStatus.UNAUTHORIZED, // Unauthorized status code
    );
  }

  async create(signupData: SignupDto) {
    const { email, address, name } = signupData;

    const existingUser = await this.userRepository.findOne({
      where: { email: email },
    });
    if (existingUser) {
      
      throw new HttpException(
        {
          message: 'Email already exists',
          status: false,  
        },
        HttpStatus.CONFLICT, // Unauthorized status code
      );

    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(signupData.password, saltRounds);

    // Create a new user
    const newUser = await this.userRepository.create({
      email: email,
      password: hashedPassword,
      name: name,
      address: address,
    });

    const { password, ...user } = newUser.get();

    const payload = { id: user.id, email: user.email };
    return {
      message: 'User created successfully',
      status: true,
      data: { userId: user.id },
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

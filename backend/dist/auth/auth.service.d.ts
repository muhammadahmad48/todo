import { User } from 'src/database/models/user.model';
import { LoginDto, SignupDto } from './dto/data.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthModuleService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: typeof User, jwtService: JwtService);
    findByCredentials(loginData: LoginDto): Promise<any>;
    create(signupData: SignupDto): Promise<{
        message: string;
        status: boolean;
        data: {
            userId: any;
        };
        access_token: string;
    }>;
}

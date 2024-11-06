import { AuthModuleService } from './auth.service';
import { LoginDto, SignupDto } from './dto/data.dto';
export declare class AuthModuleController {
    private readonly authModuleService;
    constructor(authModuleService: AuthModuleService);
    login(loginDto: LoginDto, res: any): Promise<any>;
    signup(signupDto: SignupDto, res: any): Promise<any>;
}

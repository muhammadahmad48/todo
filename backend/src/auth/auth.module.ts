import { Module } from '@nestjs/common';
import { AuthModuleService } from './auth.service';
import { AuthModuleController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/database/models/user.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),  // Register User model
  ],
  controllers: [AuthModuleController],
  providers: [AuthModuleService],
})
export class AuthModuleModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModuleModule } from './auth/auth.module';
import { User } from './database/models/user.model';
import { Notes } from './database/models/notes.model';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true,envFilePath: '.env'}),
      SequelizeModule.forRoot({
        dialect: 'mysql',host: 'localhost',port: 3306,username: 'root',
        password: 'test123',database: 'crud',autoLoadModels:true,
        models: [User,Notes]
      }),
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '12h' },
      }),
      AuthModuleModule,
      TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


import { Test, TestingModule } from '@nestjs/testing';
import { AuthModuleController } from './auth.controller';
import { AuthModuleService } from './auth.service';

describe('AuthModuleController', () => {
  let controller: AuthModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthModuleController],
      providers: [AuthModuleService],
    }).compile();

    controller = module.get<AuthModuleController>(AuthModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

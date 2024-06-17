import { Test, TestingModule } from '@nestjs/testing';
import { ValidatorEffectivenessController } from './validator-effectiveness.controller';
import { ValidatorEffectivenessService } from './validator-effectiveness.service';

describe('ValidatorEffectivenessController', () => {
  let controller: ValidatorEffectivenessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidatorEffectivenessController],
      providers: [ValidatorEffectivenessService],
    }).compile();

    controller = module.get<ValidatorEffectivenessController>(ValidatorEffectivenessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OpertaorEffectivenessController } from './opertaor-effectiveness.controller';
import { OpertaorEffectivenessService } from './opertaor-effectiveness.service';

describe('OpertaorEffectivenessController', () => {
  let controller: OpertaorEffectivenessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpertaorEffectivenessController],
      providers: [OpertaorEffectivenessService],
    }).compile();

    controller = module.get<OpertaorEffectivenessController>(OpertaorEffectivenessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

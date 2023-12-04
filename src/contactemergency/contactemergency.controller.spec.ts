import { Test, TestingModule } from '@nestjs/testing';
import { ContactemergencyController } from './contactemergency.controller';
import { ContactemergencyService } from './contactemergency.service';

describe('ContactemergencyController', () => {
  let controller: ContactemergencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactemergencyController],
      providers: [ContactemergencyService],
    }).compile();

    controller = module.get<ContactemergencyController>(ContactemergencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

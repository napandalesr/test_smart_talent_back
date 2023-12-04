import { Test, TestingModule } from '@nestjs/testing';
import { ContactemergencyService } from './contactemergency.service';

describe('ContactemergencyService', () => {
  let service: ContactemergencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactemergencyService],
    }).compile();

    service = module.get<ContactemergencyService>(ContactemergencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

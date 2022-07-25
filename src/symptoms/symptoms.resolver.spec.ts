import { Test, TestingModule } from '@nestjs/testing';
import { SymptomsResolver } from './symptoms.resolver';
import { SymptomsService } from './symptoms.service';

describe('SymptomsResolver', () => {
  let resolver: SymptomsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SymptomsResolver, SymptomsService],
    }).compile();

    resolver = module.get<SymptomsResolver>(SymptomsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

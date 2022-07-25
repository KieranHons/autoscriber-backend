import { Module } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { SymptomsResolver } from './symptoms.resolver';

@Module({
  providers: [SymptomsResolver, SymptomsService]
})
export class SymptomsModule {}

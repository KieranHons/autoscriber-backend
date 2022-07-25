import { Injectable } from '@nestjs/common';
import { CreateSymptomInput } from './dto/create-symptom.input';
import { UpdateSymptomInput } from './dto/update-symptom.input';

@Injectable()
export class SymptomsService {
  create(createSymptomInput: CreateSymptomInput) {
    return 'This action adds a new symptom';
  }

  findAll() {
    return `This action returns all symptoms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} symptom`;
  }

  update(id: number, updateSymptomInput: UpdateSymptomInput) {
    return `This action updates a #${id} symptom`;
  }

  remove(id: number) {
    return `This action removes a #${id} symptom`;
  }
}

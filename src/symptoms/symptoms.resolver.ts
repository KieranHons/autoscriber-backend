import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SymptomsService } from './symptoms.service';
import { Symptom } from './entities/symptom.entity';
import { CreateSymptomInput } from './dto/create-symptom.input';
import { UpdateSymptomInput } from './dto/update-symptom.input';

@Resolver(() => Symptom)
export class SymptomsResolver {
  constructor(private readonly symptomsService: SymptomsService) {}

  @Mutation(() => Symptom)
  createSymptom(@Args('createSymptomInput') createSymptomInput: CreateSymptomInput) {
    return this.symptomsService.create(createSymptomInput);
  }

  @Query(() => [Symptom], { name: 'symptoms' })
  findAll() {
    return this.symptomsService.findAll();
  }

  @Query(() => Symptom, { name: 'symptom' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.symptomsService.findOne(id);
  }

  @Mutation(() => Symptom)
  updateSymptom(@Args('updateSymptomInput') updateSymptomInput: UpdateSymptomInput) {
    return this.symptomsService.update(updateSymptomInput.id, updateSymptomInput);
  }

  @Mutation(() => Symptom)
  removeSymptom(@Args('id', { type: () => Int }) id: number) {
    return this.symptomsService.remove(id);
  }
}

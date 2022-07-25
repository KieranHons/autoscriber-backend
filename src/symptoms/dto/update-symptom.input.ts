import { CreateSymptomInput } from './create-symptom.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSymptomInput extends PartialType(CreateSymptomInput) {
  @Field(() => Int)
  id: number;
}

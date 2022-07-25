import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSymptomInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

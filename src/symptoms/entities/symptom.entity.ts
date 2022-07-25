import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Symptom {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

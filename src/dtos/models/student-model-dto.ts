import { Field, ObjectType } from "type-graphql";

// Entidade a nível de http
// Serão somente definidos o campos que estarão disponíveis para o frontend consumir

@ObjectType()
export class StudentModelDto{

  @Field()
  name: String

  @Field()
  register: String

  @Field()
  medium: Number
}

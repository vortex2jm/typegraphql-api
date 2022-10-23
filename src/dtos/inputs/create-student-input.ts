import { Field, InputType } from "type-graphql";

@InputType()
export class CreateStudentInput{

  @Field()
  schoolId: String

  @Field()
  name: String

  @Field()
  register: String

  @Field()
  medium: Number
}

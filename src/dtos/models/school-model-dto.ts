import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SchoolModelDto{
  
  @Field()
  name: String
}

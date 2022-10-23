import { Query, Resolver } from "type-graphql";

@Resolver()
export class StudentResolver{

  @Query(() => String)
  async helloWorld(){
    return "Hello world";
  }

}

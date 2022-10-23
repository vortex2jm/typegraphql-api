import { Arg, FieldResolver, Mutation, Query, Resolver, Root, SymbolKeysNotSupportedError } from "type-graphql";
import { CreateStudentInput } from "../dtos/inputs/create-student-input";
import { SchoolModelDto } from "../dtos/models/school-model-dto";
import { StudentModelDto } from "../dtos/models/student-model-dto";

@Resolver(() => StudentModelDto)
export class StudentResolver{

  @Query(() => [StudentModelDto])
  async listStudents(){

    // Adicionar método de listagem do banco de dados

    return [
      {
        name: "Joao Paulo Moura Clevelares",
        medium: 9.7,
        register: "2021100149"
      }
    ];
  }

  @Mutation(() => StudentModelDto)
  async createStudent(@Arg('data') data: CreateStudentInput){
    
    const student = {
      name: data.name,
      register: data.register,
      medium: data.medium
    }
    // Podemos substituir o trecho acima por uma conexão com o banco de dados
    return student; 
  }

  @FieldResolver(() => SchoolModelDto)
  async school(@Root() student: StudentModelDto){
    
    // Este método retorna a escola relacionada com o estudante em questão passado no parâmetro

    console.log(student)
    return {
      name: "UFES"
    }
  }
}

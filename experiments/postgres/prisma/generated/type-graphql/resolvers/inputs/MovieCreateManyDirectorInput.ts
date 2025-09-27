import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";

@TypeGraphQL.InputType("MovieCreateManyDirectorInput", {})
export class MovieCreateManyDirectorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}

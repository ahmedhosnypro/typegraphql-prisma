import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";
import { DirectorScalarRelationFilter } from "../inputs/DirectorScalarRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieWhereInput", {})
export class MovieWhereInput {
  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  AND?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  OR?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  NOT?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  directorFirstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  directorLastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DirectorScalarRelationFilter, {
    nullable: true
  })
  director?: DirectorScalarRelationFilter | undefined;
}

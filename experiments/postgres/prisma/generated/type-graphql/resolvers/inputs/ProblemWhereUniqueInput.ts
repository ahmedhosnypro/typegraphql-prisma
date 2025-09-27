import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";
import { CreatorListRelationFilter } from "../inputs/CreatorListRelationFilter";
import { CreatorNullableScalarRelationFilter } from "../inputs/CreatorNullableScalarRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProblemWhereInput } from "../inputs/ProblemWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ProblemWhereUniqueInput", {})
export class ProblemWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  AND?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  OR?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  NOT?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  problemText?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  creatorId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CreatorListRelationFilter, {
    nullable: true
  })
  likedBy?: CreatorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CreatorNullableScalarRelationFilter, {
    nullable: true
  })
  creator?: CreatorNullableScalarRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";

@TypeGraphQL.InputType("CreatorNullableScalarRelationFilter", {})
export class CreatorNullableScalarRelationFilter {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  is?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  isNot?: CreatorWhereInput | undefined;
}

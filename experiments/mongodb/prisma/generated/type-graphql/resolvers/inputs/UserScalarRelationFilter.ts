import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserScalarRelationFilter", {})
export class UserScalarRelationFilter {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  is?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  isNot?: UserWhereInput | undefined;
}

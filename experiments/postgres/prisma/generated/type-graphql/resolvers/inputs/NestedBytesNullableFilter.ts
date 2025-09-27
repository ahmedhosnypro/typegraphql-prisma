import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";

@TypeGraphQL.InputType("NestedBytesNullableFilter", {})
export class NestedBytesNullableFilter {
  @TypeGraphQL.Field(_type => BytesScalar, {
    nullable: true
  })
  equals?: Uint8Array | undefined;

  @TypeGraphQL.Field(_type => [BytesScalar], {
    nullable: true
  })
  in?: Uint8Array[] | undefined;

  @TypeGraphQL.Field(_type => [BytesScalar], {
    nullable: true
  })
  notIn?: Uint8Array[] | undefined;

  @TypeGraphQL.Field(_type => NestedBytesNullableFilter, {
    nullable: true
  })
  not?: NestedBytesNullableFilter | undefined;
}

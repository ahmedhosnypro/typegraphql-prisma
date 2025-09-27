import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";
import { NestedBytesNullableFilter } from "../inputs/NestedBytesNullableFilter";

@TypeGraphQL.InputType("BytesNullableFilter", {})
export class BytesNullableFilter {
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

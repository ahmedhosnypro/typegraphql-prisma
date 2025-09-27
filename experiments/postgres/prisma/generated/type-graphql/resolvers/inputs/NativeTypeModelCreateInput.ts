import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";

@TypeGraphQL.InputType("NativeTypeModelCreateInput", {})
export class NativeTypeModelCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  bigInt?: bigint | undefined;

  @TypeGraphQL.Field(_type => BytesScalar, {
    nullable: true
  })
  byteA?: Uint8Array | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  decimal?: Prisma.Decimal | undefined;
}

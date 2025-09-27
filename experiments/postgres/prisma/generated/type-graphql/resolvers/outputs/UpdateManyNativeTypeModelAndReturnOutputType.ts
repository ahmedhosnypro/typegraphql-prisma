import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UpdateManyNativeTypeModelAndReturnOutputType", {})
export class UpdateManyNativeTypeModelAndReturnOutputType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  bigInt!: bigint | null;

  @TypeGraphQL.Field(_type => BytesScalar, {
    nullable: true
  })
  byteA!: Uint8Array | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  decimal!: Prisma.Decimal | null;
}

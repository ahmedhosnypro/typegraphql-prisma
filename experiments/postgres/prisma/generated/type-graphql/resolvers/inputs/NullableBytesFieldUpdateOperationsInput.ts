import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";

@TypeGraphQL.InputType("NullableBytesFieldUpdateOperationsInput", {})
export class NullableBytesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BytesScalar, {
    nullable: true
  })
  set?: Uint8Array | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar, BytesScalar } from "../../scalars";

@TypeGraphQL.InputType("StringFieldUpdateOperationsInput", {})
export class StringFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  set?: string | undefined;
}

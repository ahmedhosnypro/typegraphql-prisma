import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UpdateManyProblemAndReturnOutputTypeCreatorArgs } from "./args/UpdateManyProblemAndReturnOutputTypeCreatorArgs";
import { Creator } from "../../models/Creator";

@TypeGraphQL.ObjectType("UpdateManyProblemAndReturnOutputType", {})
export class UpdateManyProblemAndReturnOutputType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creatorId!: number | null;

  creator!: Creator | null;

  @TypeGraphQL.Field(_type => Creator, {
    name: "creator",
    nullable: true
  })
  getCreator(@TypeGraphQL.Root() root: UpdateManyProblemAndReturnOutputType, @TypeGraphQL.Args() args: UpdateManyProblemAndReturnOutputTypeCreatorArgs): Creator | null {
    return root.creator;
  }
}

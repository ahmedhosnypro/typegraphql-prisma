import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar, BytesScalar } from "../scalars";
import { Director } from "../models/Director";

@TypeGraphQL.ObjectType("Movie", {})
export class Movie {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorFirstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorLastName!: string;

  director?: Director;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}

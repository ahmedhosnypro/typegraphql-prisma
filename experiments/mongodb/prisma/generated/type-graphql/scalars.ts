import { Prisma } from "./../client";
import { GraphQLScalarType, Kind } from "graphql";

export const DecimalJSScalar = new GraphQLScalarType({
  name: "Decimal",
  description: "GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library.",
  serialize: (value: unknown) => {
    if (!(Prisma.Decimal.isDecimal(value))) {
      throw new Error(`[DecimalError] Invalid argument: ${Object.prototype.toString.call(value)}. Expected Prisma.Decimal.`);
    }
    return (value as Prisma.Decimal).toString();
  },
  parseValue: (value: unknown) => {
    if (!(typeof value === "string")) {
      throw new Error(`[DecimalError] Invalid argument: ${typeof value}. Expected string.`);
    }
    return new Prisma.Decimal(value);
  },
});

function uint8ArrayToBase64(uint8Array: Uint8Array) {
  return Buffer.from(uint8Array).toString("base64");
}

function base64ToUint8Array(base64: string) {
  return new Uint8Array(Buffer.from(base64, "base64"));
}

export const BytesScalar = new GraphQLScalarType({
  name: "Bytes",
  description: "GraphQL Scalar representing the Prisma.Bytes type.",
  serialize: (value: unknown) => {
    if (!(value instanceof Uint8Array)) {
      throw new Error(`[BytesError] Invalid argument: ${Object.prototype.toString.call(value)}. Expected Uint8Array.`);
    }
    return uint8ArrayToBase64(value);
  },
  parseValue: (value: unknown) => {
    if (!(typeof value === "string")) {
      throw new Error(`[BytesError] Invalid argument: ${typeof value}. Expected string.`);
    }
    return base64ToUint8Array(value);
  },
  parseLiteral: (ast) => {
    if (ast.kind !== Kind.STRING) {
      throw new Error(`[BytesError] Invalid argument: ${ast.kind}. Expected string.`);
    }
    return base64ToUint8Array(ast.value);
  }
});



import type { PrismaConfig } from "prisma";
import "dotenv/config";

export default {
  schema: "prisma/schema.prisma",
  migrations: {
    seed: "ts-node ./prisma/seed.ts",
  },
} satisfies PrismaConfig;

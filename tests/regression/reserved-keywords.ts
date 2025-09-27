import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";

describe("reserved keywords", () => {
  it.each(["await", "async", "using"])(
    "should throw an error when model name is the reserved keyword '%s'",
    async keyword => {
      const schema = /* prisma */ `
      model ${keyword} {
        id Int @id
      }
    `;

      let error: Error | undefined;
      try {
        await generateCodeFromSchema(schema, {
          outputDirPath: generateArtifactsDirPath(
            "dummy-dir-for-reserved-keywords",
          ),
        });
      } catch (e) {
        error = e as Error;
      }

      expect(error).toBeDefined();
      expect(error!.message).toEqual(
        `Model name "${keyword}" is a reserved keyword. Please change it to a different name.`,
      );
    },
  );
});
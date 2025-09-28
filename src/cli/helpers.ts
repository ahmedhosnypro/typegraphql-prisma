type StringOrStringArray = string | string[] | undefined;

export function parseStringBoolean(stringBoolean: StringOrStringArray) {
  return stringBoolean === "true"
    ? true
    : stringBoolean === "false"
      ? false
      : undefined;
}

export function parseString(
  value: StringOrStringArray,
  optionPropertyName: string,
) {
  if (Array.isArray(value)) {
    throw new Error(
      `Invalid "${optionPropertyName}" option value "${value}" provided for TypeGraphQL generator.`,
    );
  }
  return value;
}

export function parseStringArray<TAllowedValue extends string>(
  stringArray: StringOrStringArray,
  optionPropertyName: string,
  allowedValues?: readonly TAllowedValue[],
): TAllowedValue[] | undefined {
  if (!stringArray) {
    return undefined;
  }

  let parsedArray: string[];
  if (typeof stringArray === "string") {
    if (!stringArray.includes(",")) {
      throw new Error(
        `Invalid "${optionPropertyName}" value "${stringArray}" provided for TypeGraphQL generator.`,
      );
    }
    parsedArray = stringArray.split(",").map(it => it.trim());
  } else {
    parsedArray = stringArray;
  }

  if (allowedValues) {
    for (const option of parsedArray) {
      if (!allowedValues.includes(option as any)) {
        throw new Error(
          `Invalid "${optionPropertyName}" option value "${option}" provided for TypeGraphQL generator.`,
        );
      }
    }
  }

  return parsedArray as TAllowedValue[];
}

export function parseStringEnum<TAllowedValue extends string>(
  stringEnum: StringOrStringArray,
  optionPropertyName: string,
  allowedValues: readonly TAllowedValue[],
): TAllowedValue | undefined {
  if (!stringEnum) {
    return undefined;
  }
  if (!allowedValues.includes(stringEnum as any)) {
    throw new Error(
      `Invalid "${optionPropertyName}" option value "${stringEnum}" provided for TypeGraphQL generator.`,
    );
  }
  return stringEnum as TAllowedValue;
}

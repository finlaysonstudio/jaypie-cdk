import { describe, expect, it } from "vitest";

import { CDK } from "../constants.js";

describe("Constants", () => {
  it("Exports objects cor constants", () => {
    expect(CDK).not.toBeUndefined();
    expect(CDK).toBeObject();
  });
});

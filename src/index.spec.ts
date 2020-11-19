import output from ".";
import assert from "assert";

describe("message", () => {
  it("should say hello", () => {
    assert.equal(output, "hello");
  });
});

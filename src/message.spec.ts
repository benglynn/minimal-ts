import message from "./message";
import assert from "assert";

describe("message", () => {
  it("should say hello", () => {
    assert.equal(message, "Hello from TypeScript");
  });
});

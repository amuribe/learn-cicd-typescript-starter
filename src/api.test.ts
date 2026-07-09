import { describe, expect, test } from "vitest";
import { getAPIKey } from "./api/auth.js";

describe("getAPIKey", () => {
  test("returns null when no header is present", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when auth header has length < 2", () => {
    const headers = {
      authorization: "a",
    };
    expect(getAPIKey(headers)).toBeNull();
  });
  test("valid auth header returns api key", () => {
    const headers = {
      authorization: "ApiKey abc123",
    };
    expect(getAPIKey(headers)).toEqual("abc123");
  });
});

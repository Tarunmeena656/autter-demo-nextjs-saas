import { describe, expect, test } from "vitest";
import * as z from "zod";

// Guards the zod dependency bump to v4 (GHSA-mrhx-c7xc-m3w5).
// The top-level z.email() validator only exists in zod v4; in zod v3
// the export is undefined, so this test fails before the bump.
describe("zod dependency", () => {
  test("exposes the v4 top-level email validator", () => {
    expect(typeof z.email).toBe("function");
    expect(z.email().safeParse("ada@acme.test").success).toBe(true);
  });
});

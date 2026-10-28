import { kebabCase } from "./kebabCase";

describe("kebabCase", () => {
  it("lowercases and hyphenates space-separated words", () => {
    expect(kebabCase("Web Design")).toBe("web-design");
  });

  it("splits camelCase words", () => {
    expect(kebabCase("webDesign")).toBe("web-design");
  });

  it("collapses underscores and extra whitespace", () => {
    expect(kebabCase("web_design  tips")).toBe("web-design-tips");
  });
});

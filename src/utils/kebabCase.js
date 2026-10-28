/**
 * Minimal kebab-case for tag names (e.g. "Web Design" -> "web-design").
 * Replaces lodash's kebabCase, which this project only used for this.
 */
export const kebabCase = (value) =>
  String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

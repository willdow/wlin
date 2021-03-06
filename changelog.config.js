module.exports = {
  disableEmoji: false,
  list: [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "style",
    "ci",
    "perf",
    "release"
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues",
    "lerna"
  ],
  scopes: [],
  types: {
    chore: {
      description: "Build process or auxiliary tool changes",
      emoji: "๐งฐ",
      value: "chore"
    },
    ci: {
      description: "CI related changes",
      emoji: "๐พ",
      value: "ci"
    },
    docs: {
      description: "Documentation only changes",
      emoji: "๐",
      value: "docs"
    },
    feat: {
      description: "A new feature",
      emoji: "๐ฆ",
      value: "feat"
    },
    fix: {
      description: "A bug fix",
      emoji: "๐",
      value: "fix"
    },
    perf: {
      description: "A code change that improves performance",
      emoji: "โก๏ธ",
      value: "perf"
    },
    refactor: {
      description: "A code change that neither fixes a bug or adds a feature",
      emoji: "๐ ",
      value: "refactor"
    },
    release: {
      description: "Create a release commit",
      emoji: "๐",
      value: "release"
    },
    style: {
      description: "Markup, white-space, formatting, missing semi-colons...",
      emoji: "๐จ",
      value: "style"
    },
    test: {
      description: "Adding missing tests",
      emoji: "๐งช",
      value: "test"
    }
  }
};

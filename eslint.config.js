module.exports = [
  {
      files: ["src/**/*.tsx"],
      rules: {
          semi: "error",
          "prefer-const": "error"
      },
      ignores: [
        "node_modules/*",
    ]
  }
];
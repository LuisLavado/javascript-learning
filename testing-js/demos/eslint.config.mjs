import js from "@eslint/js";
import globals from "globals";
import jest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Reglas base para tu código fuente
  {
    files: ["src/**/*.{js,mjs,cjs}"],
    languageOptions: {
      // si tu código corre en Node y también usa APIs de navegador, mezcla ambos
      globals: { ...globals.node, ...globals.browser },
    },
    ...js.configs.recommended,
    rules: {
      // .editorconfig → ESLint core
      indent: ["error", 2],                 // indent_style + indent_size
      "linebreak-style": ["error", "unix"], // end_of_line = lf
      "no-trailing-spaces": "error",        // trim_trailing_whitespace = true
      "eol-last": ["error", "always"],      // insert_final_newline = true
      "max-len": "off",                     // max_line_length = off
      "no-var": "error",                    // Evita var
      "prefer-const": "error"               // Si la variable no se reasigna, sugiere const
    },
  },
  // Reglas específicas para tests (Jest)
  {
    files: [
      "**/*.{test,spec}.{js,mjs,cjs}",
      "**/__tests__/**/*.{js,mjs,cjs}",
    ],
    languageOptions: {
      // Jest corre en Node; agrega los globals de Jest
      globals: { ...globals.node, ...globals.jest },
    },
    plugins: { jest },
    // aplica el preset recomendado del plugin (formato flat)
    ...jest.configs["flat/recommended"],
    rules: {
      // Mantén las mismas reglas de formato en tests
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "max-len": "off",
    },
  },
  // Excepción para CHANGELOG.md (no aplicar indentación)
  {
    files: ["CHANGELOG.md"],
    rules: {
      indent: "off",
    },
  },
  // Archivos CommonJS sueltos
  {
    files: ["**/*.cjs"],
    languageOptions: { sourceType: "commonjs" }
  },
]);

import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import security from 'eslint-plugin-security';


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      security
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser, // Memasukkan semua global browser standar
        restartGame: "writable", // Deklarasikan restartGame sebagai global dan bisa ditimpa
        resetScores: "writable" // Deklarasikan resetScores sebagai global dan bisa ditimpa
      }
    },
    rules: {
      ...security.configs.recommended.rules,
      "no-unused-vars": "off",
      "no-undef": "off",
      // Tambahkan baris ini:
      "security/detect-object-injection": "off"
    }
  },
]);
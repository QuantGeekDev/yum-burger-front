import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_HOMEPAGE_URL,
  },
});

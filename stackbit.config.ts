import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18", // or whichever version you're using (16 or later)
  devCommand: "npm run dev -- --port {PORT} --host 127.0.0.1",
  experimental: {
    ssg: {
      name: "Vite",
      logPatterns: {
        up: ["Local:"],
      },
    },
  },
  // Add content sources and other configurations as needed
});

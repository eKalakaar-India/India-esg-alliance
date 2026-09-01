import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load server/.env
const envPath = path.resolve(__dirname, "../.env");

console.log("Loading .env from:", envPath);

const result = dotenv.config({
  path: envPath,
});

if (result.error) {
  console.error("❌ Error loading .env:", result.error);
} else {
  console.log("✅ .env loaded successfully");
}

console.log("MAIL HOST:", process.env.MAIL_SMTP_HOST);
console.log("MAIL PORT:", process.env.MAIL_SMTP_PORT);

const { default: app } = await import("./app.js");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`⚡ Server running on port ${PORT}`);
  console.log(`👉 http://localhost:${PORT}`);
});

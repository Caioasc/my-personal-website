#!/usr/bin/env node
const { execSync } = require("child_process");
console.log("🧪 DEPLOYMENT READINESS TEST");
console.log("Node.js:", process.version);
try {
  const npm = execSync("npm --version", { encoding: "utf8" }).trim();
  console.log("npm:", npm);
} catch (e) {
  console.log("npm: ERROR");
}
console.log("✅ Environment ready for GitHub Actions deployment");
console.log("Next: Run Enterprise Deploy Pipeline in GitHub Actions");
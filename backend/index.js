const http = require("http");
const app = require("./services/express");
const connectDB = require("./services/db"); // Import DB connection

async function main() {
  const server = http.createServer(app);
  await connectDB();

  const PORT = process.env.PORT || 8080;
  server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}

main();

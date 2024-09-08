const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
require("dotenv").config();

// Handling Uncaught Exceptions

process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exceptions");
  process.exit(1);
});

// Config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/.env" });
}

// connecting to database ( do it after config always)

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on http://localhost:${process.env.PORT || 5000}`
  );
});

// Unhandled Promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});

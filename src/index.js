import express from "express";
import "dotenv/config";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 5000;

import "./helpers/init_mongodb.js";

// routes
import authRouter from "./routes/authRoutes.js";

app.use(morgan("dev"));
app.use(express.json());

app.get("/api", (req, res, next) => {
  res.json("home page");
});
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

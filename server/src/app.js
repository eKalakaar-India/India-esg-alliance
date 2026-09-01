import express from "express";
import cors from "cors";
import queryRouter from "./routes/query.routes.js";

const app = express();

// ================= MIDDLEWARE =================

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// ================= HEALTH CHECK =================

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is healthy",
  });
});

// ================= API ROUTES =================

app.use("/api/v1", queryRouter);

// ================= 404 HANDLER =================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// ================= GLOBAL ERROR HANDLER =================

app.use((err, req, res, next) => {
  console.error(err);

  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;

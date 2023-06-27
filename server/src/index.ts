import express, { Application } from "express";
import cors from "cors";
const timeRouter = require("./routes/time");
const metricsRouter = require("./routes/metrics");
import "dotenv/config";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.use("/time", timeRouter);
app.use("/metrics", metricsRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

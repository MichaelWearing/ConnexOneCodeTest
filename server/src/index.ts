import express, { Application } from "express";
const timeRouter = require("./routes/time");
const metricsRouter = require("./routes/metrics");

const app: Application = express();

app.use(express.json());

app.use("/time", timeRouter);
app.use("/metrics", metricsRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

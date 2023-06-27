import { Router, Request, Response } from "express";
import promMid from "express-prometheus-middleware";

const router = Router();

router.use(
  promMid({
    metricsPath: "/",
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    authenticate: (req) => req.headers.authorization === process.env.AUTH_TOKEN,
  })
);

module.exports = router;

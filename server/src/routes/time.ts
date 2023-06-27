import { Router, Request, Response } from "express";

import TimeResponse from "../interfaces/TimeResponse";

const router = Router();

router.get("/", (req: Request, res: Response<TimeResponse>) => {
  // Move auth to middle ware folder
  const authorization = req.headers.authorization;
  if (!authorization || authorization !== process.env.AUTH_TOKEN) {
    res.sendStatus(403);
  }
  res.send({
    properties: {
      epoch: {
        description:
          "The current server time, in epoch seconds, at time of processing the request.",
        type: "number",
      },
    },
    required: ["epoch"],
    type: "object",
    whereDoIPutThis: getCurrentTimeInSeconds(),
  });
});

// Move this logic out of file maybe
const getCurrentTimeInSeconds = (): number => {
  const currentTime = new Date();
  const epochSeconds = Math.floor(currentTime.getTime() / 1000);
  return epochSeconds;
};

module.exports = router;

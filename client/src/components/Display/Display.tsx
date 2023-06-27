import { useEffect, useState } from "react";
import { fetchTime } from "../../utils/fetchTime.util";
import { fetchMetrics } from "../../utils/fetchMetrics.util";

import Time from "../Time/Time";
import Metrics from "../Metrics/Metrics";

import { Wrapper } from "./Display.styles";

const Display: React.FC = () => {
  const [time, setTime] = useState(0);
  const [metrics, setMetrics] = useState("");

  const [newRequest, setNewRequest] = useState(true);

  const [loadingTime, setLoadingTime] = useState(true);
  const [loadingMetrics, setLoadingMetrics] = useState(false);

  // Initial fetch requests and then once every 30 seconds
  useEffect(() => {
    if (newRequest) {
      fetchTime(setTime, setLoadingTime);
      fetchMetrics(setMetrics, setLoadingMetrics);
      setNewRequest(false);
    }
  }, [newRequest]);

  return (
    <Wrapper>
      <Time
        time={time}
        setNewRequest={setNewRequest}
        loadingTime={loadingTime}
      />
      <Metrics metrics={metrics} loadingMetrics={loadingMetrics} />
    </Wrapper>
  );
};

export default Display;

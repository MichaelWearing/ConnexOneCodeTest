import { useEffect, useState } from "react";

import {
  Wrapper,
  Title,
  Text,
  ServerTimeWrapper,
  ClientTimeWrapper,
} from "./Time.styles";

type TimeType = {
  time: number;
  setNewRequest: (value: boolean) => void;
  loadingTime: boolean;
};

const Time: React.FC<TimeType> = ({ time, setNewRequest, loadingTime }) => {
  const [counter, setCounter] = useState(0);

  // Ticks once per second
  useEffect(() => {
    const counterTick = setInterval(() => setCounter((prev) => prev + 1), 1000);
    
    return () => clearInterval(counterTick);
  }, []);
  
  // Every 30 seconds we make a new request to the server
  useEffect(() => {
    const counterTick = setInterval(() => {
      setCounter(() => 0);
      setNewRequest(true);
    }, 5000); // Change to 30000

    return () => clearInterval(counterTick);
  }, []);

  // Adds a 0 before single digit numbers
  const formatCounter = (counter: number) => {
    if (counter < 10) {
      return `0${counter}`;
    } else {
      return counter;
    }
  };

  return (
    <Wrapper>
      <ServerTimeWrapper>
        <Title>Epoch Time</Title>
        {loadingTime ? <Text>Loading Time</Text> : <Text>{time}</Text>}
      </ServerTimeWrapper>
      <ClientTimeWrapper>
        <Title>Time since last server request</Title>
        <Text>00:00:{formatCounter(counter)}</Text>
      </ClientTimeWrapper>
    </Wrapper>
  );
};

export default Time;

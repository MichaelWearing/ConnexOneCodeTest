import Time from "../Time/Time"
import Metrics from "../Metrics/Metrics";

import { Wrapper } from "./Display.styles";

type DisplayProps = {
  // children: React.ReactNode;
};

const Display: React.FC = () => {
  return (
    <Wrapper>
      <Time />
      <Metrics />
      {/* <h1>Display</h1> */}
    </Wrapper>
  );
};

export default Display;

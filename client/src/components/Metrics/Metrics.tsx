import { Wrapper, TextWrapper } from "./Metrics.styles";

type MetricType = {
  metrics: string;
  loadingMetrics: boolean;
};

const Metrics: React.FC<MetricType> = ({ metrics, loadingMetrics }) => {
  return (
    <Wrapper>
      {loadingMetrics ? (
        <TextWrapper>Loading</TextWrapper>
      ) : (
        <pre>
          <TextWrapper>{metrics}</TextWrapper>
        </pre>
      )}
    </Wrapper>
  );
};

export default Metrics;

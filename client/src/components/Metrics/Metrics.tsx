import { Wrapper, PreTextWrapper, TextWrapper } from "./Metrics.styles";

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
        <PreTextWrapper>
          <TextWrapper>{metrics}</TextWrapper>
        </PreTextWrapper>
      )}
    </Wrapper>
  );
};

export default Metrics;

export const fetchMetrics = async (
  setTime: (callback: string) => void,
  setLoadingMetrics: (value: boolean) => void
) => {
  try {
    setLoadingMetrics(true);
    const response = await fetch(`${process.env.REACT_APP_SERVER}/metrics`, {
      headers: {
        authorization: `${process.env.REACT_APP_AUTH_TOKEN}`,
      },
    });
    const json = await response.text();
    setLoadingMetrics(false);
    setTime(json);
  } catch (err) {
    console.error("Error = ", err);
  }
};

export const fetchMetrics = async (
  setTime: (callback: string) => void,
  setLoadingMetrics: (value: boolean) => void
) => {
  // Add correct type
  try {
    setLoadingMetrics(true);
    // add to .env
    const response = await fetch("http://localhost:8000/metrics", {
      headers: {
        // add to .env
        authorization: "mysecrettoken",
      },
    });
    const json = await response.text();
    setLoadingMetrics(false);
    setTime(json);
  } catch (err) {
    console.error("Error = ", err);
  }
};

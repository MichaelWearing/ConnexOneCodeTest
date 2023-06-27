export const fetchTime = async (
  setTime: (callback: number) => void,
  setLoadingTime: (value: boolean) => void
) => {
  try {
    setLoadingTime(true);
    // add to s.env
    const response = await fetch("http://localhost:8000/time", {
      headers: {
        // add to .env
        authorization: "mysecrettoken",
      },
    });
    const json = await response.json();
    setLoadingTime(false);
    setTime(json.whereDoIPutThis);
  } catch (err) {
    console.error("Error = ", err);
  }
};

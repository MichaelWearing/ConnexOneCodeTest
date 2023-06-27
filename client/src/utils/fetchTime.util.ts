export const fetchTime = async (
  setTime: (callback: number) => void,
  setLoadingTime: (value: boolean) => void
) => {
  // Add correct type
  try {
    setLoadingTime(true);

    const response = await fetch("http://localhost:8000/time", {
      headers: {
        // add auth here
      },
    });
    const json = await response.json();
    setLoadingTime(false);
    setTime(json.whereDoIPutThis);
  } catch (err) {
    console.error("Error = ", err);
  }
};

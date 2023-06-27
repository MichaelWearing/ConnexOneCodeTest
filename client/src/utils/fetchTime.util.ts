export const fetchTime = async (
  setTime: (callback: number) => void,
  setLoadingTime: (value: boolean) => void
) => {
  try {
    setLoadingTime(true);
    const response = await fetch(`${process.env.REACT_APP_SERVER}/time`, {
      headers: {
        authorization: `${process.env.REACT_APP_AUTH_TOKEN}`,
      },
    });
    const json = await response.json();
    setLoadingTime(false);
    setTime(json.whereDoIPutThis);
  } catch (err) {
    console.error("Error = ", err);
  }
};

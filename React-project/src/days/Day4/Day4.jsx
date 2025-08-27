import axios from "axios";
import { useEffect, useState } from "react";
export const Day4 = (props) => {
  const [qote, setQote] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/quotes/random");

      setQote(res.data.quote);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <>
      <h2>{props.title}</h2>Day 4
      <br />
      {loading && <p>Loading...</p>}
      {!loading && <p>Today's Quote is: "{qote}"</p>}
      <button onClick={fetchQuote}>New Quote</button>
    </>
  );
};

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

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // har 500ms par state flip karni hai
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 500);

    // cleanup karna important hai!
    return () => clearInterval(interval);
  }, []); // empty dependency → sirf mount hone par run hoga
  return (
    <>
      <h2 style={{ color: "blue" }}>{visible ? "👀 Blink Animation!" : ""}</h2>
      <h2>{props.title}</h2>Day 4
      <br />
      {loading && <p>Loading...</p>}
      {!loading && <p>Today's Quote is: "{qote}"</p>}
      <button onClick={fetchQuote}>New Quote</button>
    </>
  );
};

/* eslint-disable react/prop-types */
import { useState } from "react";
import { quotes } from "../data";
import FancyText from "./FancyText";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}

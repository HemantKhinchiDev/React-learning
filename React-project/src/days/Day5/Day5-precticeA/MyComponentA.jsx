import { useRef, useEffect, useState } from "react";

export const MyComponentA = (prop) => {
  const [inputText, setInputText] = useState("");

  // 1. useRef Hook:
  // We create a ref to hold a reference to the input DOM element.
  // We initialize it with null.
  const inputRef = useRef(null);

  // 2. useEffect Hook:
  // This hook handles the side effect of focusing the input element.
  useEffect(() => {
    // Check if the current property of the ref exists and then call the focus() method on it.
    // This code runs only once when the component is mounted due to the empty dependency array.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // The empty dependency array `[]` ensures this effect runs only once.

  return <></>;
};

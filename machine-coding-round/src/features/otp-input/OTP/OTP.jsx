import { useEffect, useRef, useState } from "react";
import "./OTP.css";

function OTP({ noOfDigits }) {
  const [digits, setDigits] = useState(new Array(noOfDigits).fill(""));
  const inputRefs = useRef(new Array(noOfDigits).fill(null));

  useEffect(() => {
    if (!digits.length) return;
    inputRefs.current[0].focus();
  }, []);

  function onChnageHandler(value, index) {
    value = value.trim();

    if (!value || isNaN(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value.slice(-1);
    setDigits(newDigits);

    inputRefs.current[index + 1]?.focus();
  }

  function backSpaceHandler(key, index) {
    if (key === "Backspace") {
      const newDigits = [...digits];
      newDigits[index] = "";
      setDigits(newDigits);
      inputRefs.current[index - 1]?.focus();
    }
  }

  return (
    <div>
      {digits.map((digit, index) => {
        return (
          <input
            ref={(input) => {
              inputRefs.current[index] = input;
            }}
            key={index}
            className="otp-input-box"
            type="text"
            value={digit}
            onChange={(e) => {
              onChnageHandler(e.target.value, index);
            }}
            onKeyDown={(e) => {
              backSpaceHandler(e.key, index);
            }}
          />
        );
      })}
    </div>
  );
}

export default OTP;

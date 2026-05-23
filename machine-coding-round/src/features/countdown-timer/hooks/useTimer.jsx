import { useEffect, useRef, useState } from "react";

function useTimer() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const timerIdRef = useRef();

  useEffect(() => {
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, []);

  function onChangeHandler(action, value) {
    value = value.trim();
    if (
      value !== "" &&
      (isNaN(value) ||
        parseInt(value, 10) < 0 ||
        (action !== "HH" && parseInt(value, 10) > 59))
    )
      return;

    if (action === "HH") setHours(value === "" ? value : parseInt(value, 10));
    else if (action === "MM")
      setMinutes(value === "" ? value : parseInt(value, 10));
    else if (action === "SS")
      setSeconds(value === "" ? value : parseInt(value, 10));
  }

  function startTimer() {
    clearInterval(timerIdRef.current);
    const timerInMs =
      (hours || 0) * 3600 * 1000 +
      (minutes || 0) * 60 * 1000 +
      (seconds || 0) * 1000;
    if (timerInMs === 0) return;

    setIsTimerStarted(true);
    setIsTimerPaused(false);

    const timerEndTimeInMs = Date.now() + timerInMs;

    timerIdRef.current = setInterval(() => {
      const msLeft = timerEndTimeInMs - Date.now();

      if (msLeft <= 0) {
        setIsTimerStarted(false);
        clearInterval(timerIdRef.current);
        setHours("");
        setMinutes("");
        setSeconds("");
        return;
      }

      const hhLeft = Math.floor(msLeft / (3600 * 1000));
      const mmLeft = Math.floor((msLeft % (3600 * 1000)) / (60 * 1000));
      const ssLeft = Math.floor(
        (msLeft - (hhLeft * 3600 * 1000 + mmLeft * 60 * 1000)) / 1000,
      );

      setHours(hhLeft);
      setMinutes(mmLeft);
      setSeconds(ssLeft);
    }, 100);
  }

  function pauseTimer() {
    clearInterval(timerIdRef.current);
    setIsTimerPaused(true);
  }

  function stopTimer() {
    clearInterval(timerIdRef.current);
    setIsTimerStarted(false);
    setIsTimerPaused(false);
    setHours("");
    setMinutes("");
    setSeconds("");
  }

  return {
    hours,
    minutes,
    seconds,
    isTimerStarted,
    isTimerPaused,
    onChangeHandler,
    startTimer,
    pauseTimer,
    stopTimer
  };
}

export default useTimer;

import styles from './CountdownTimer.module.css'
import TimerInput from './components/TimerInput/TimerInput';
import TimerDisplay from './components/TimerDisplay/TimerDisplay';
import useTimer from './hooks/useTimer';

function CountdownTimer() {
  const {
    hours,
    minutes,
    seconds,
    onChangeHandler,
    isTimerPaused,
    isTimerStarted,
    startTimer,
    pauseTimer,
    stopTimer
  } = useTimer();

  return (
    <>
      { 
        isTimerStarted
          ? <TimerDisplay hours={hours} minutes={minutes} seconds={seconds} isTimerPaused={isTimerPaused} /> 
          : <TimerInput hours={hours} minutes={minutes} seconds={seconds} onChangeHandler={onChangeHandler} /> 
      }
      <div className={styles.timerActionContiner}>
        {!isTimerStarted ? 
          <button onClick={startTimer}>Start</button> 
          :
          <>
            {
              isTimerPaused
              ? <button onClick={startTimer}>Resume</button>
              : <button onClick={pauseTimer}>Pause</button>
            }
            <button onClick={stopTimer}>Reset</button>
          </>
        }       
      </div>
    </>
  );
}

export default CountdownTimer;

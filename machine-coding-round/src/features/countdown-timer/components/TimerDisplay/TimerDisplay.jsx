import styles from "./TimerDisplay.module.css"

function TimerDisplay({ hours, minutes, seconds, isTimerPaused }) {
  
  return (
    <div className={styles.timerValueContainer}>
      <span className={styles.timerValues}>{hours > 9 ? hours : `0${hours}`}</span>
      <span className={`${styles.timerColon} ${isTimerPaused ? '' : styles.blinkingTimerColon}`}>:</span>
      <span className={styles.timerValues}>{minutes > 9 ? minutes : `0${minutes}`}</span>
      <span className={`${styles.timerColon} ${isTimerPaused ? '' : styles.blinkingTimerColon}`}>:</span>
      <span className={styles.timerValues}>{seconds > 9 ? seconds : `0${seconds}`}</span>
    </div>
  )
}

export default TimerDisplay
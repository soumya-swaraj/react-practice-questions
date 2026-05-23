import styles from './TimerInput.module.css'

function TimerInput({hours, minutes, seconds, onChangeHandler}) {
  return (
    <div className={styles.timerInputContainer}>
        <input
          type='text'
          value={hours}
          onChange={(e) => {onChangeHandler('HH', e.target.value)}}
          placeholder='HH'
        />
        <input 
          type='text'
          value={minutes}
          placeholder='MM'
          onChange={(e) => {onChangeHandler('MM', e.target.value)}}
        />
        <input 
          type='text'
          value={seconds}
          placeholder='SS'
          onChange={(e) => {onChangeHandler('SS', e.target.value)}}
        />
      </div>
  )
}

export default TimerInput
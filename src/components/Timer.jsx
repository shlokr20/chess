import React, { useState, useEffect } from 'react';

const Timer = ({ timeLimit, isActive, onTimeUp, player }) => {
  const [time, setTime] = useState(timeLimit * 60); // Time in seconds

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      onTimeUp(); // Signal when time is up
    }
    return () => clearInterval(interval);
  }, [isActive, time, onTimeUp]);

  return (
    <div>
      <h3>{player} Timer: {Math.floor(time / 60)}:{('0' + time % 60).slice(-2)}</h3>
    </div>
  );
};

export default Timer;
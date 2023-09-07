import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Countdown = () => {
  const targetDate = moment('2023-09-28', 'YYYY-MM-DD');
  const [remainingTime, setRemainingTime] = useState(targetDate.diff(moment()));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const diff = targetDate.diff(now);

      if (diff <= 0) {
        clearInterval(interval);
        setRemainingTime(0);
      } else {
        setRemainingTime(diff);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const duration = moment.duration(remainingTime);

  return (
    <div>
      <h1 >
        {duration.days()} Días, {duration.hours()} Horas, {duration.minutes()} Minutos, {duration.seconds()} Segundos
      </h1>
    </div>
  );
};

export default Countdown;
'use client';

import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer = () => {
  const eventDate = moment().add(1, 'month'); // Set the event date one month from now
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function calculateTimeRemaining() {
    const now = moment();
    const diff = eventDate.diff(now);
    const duration = moment.duration(diff);

    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  return (
    <div className="text-center mt-24">
      <h2 className="text-2xl font-bold mb-4">Countdown Timer</h2>
      <div className="flex justify-center">
        <div className="mr-4 bg-white text-blue-500 p-4 rounded-lg">
          <span className="text-3xl font-semibold">{timeRemaining.days}</span>
          <span className="block text-sm">days</span>
        </div>
        <div className="mr-4 bg-white text-blue-500 p-4 rounded-lg">
          <span className="text-3xl font-semibold">{timeRemaining.hours}</span>
          <span className="block text-sm">hours</span>
        </div>
        <div className="mr-4 bg-white text-blue-500 p-4 rounded-lg">
          <span className="text-3xl font-semibold">{timeRemaining.minutes}</span>
          <span className="block text-sm">minutes</span>
        </div>
        <div className='bg-white text-blue-500 p-4 rounded-lg'>
          <span className="text-3xl font-semibold">{timeRemaining.seconds}</span>
          <span className="block text-sm">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

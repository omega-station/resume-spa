/**
 * https://stackoverflow.com/questions/16994662/count-animation-from-number-a-to-b
 */

import { useEffect, useState } from 'react';

const useAnimateValue = (start: number, end: number, duration: number, delay: number) => {
  const [countUp, setCountUp] = useState(0);

  useEffect(() => {
    let intervalId: number;

    const timeoutId: number = window.setTimeout(() => {
      const STEP_MIN: number = 50;
      const range: number = end - start;
      const step: number = Math.max(Math.abs(Math.floor(duration / range)), STEP_MIN);
      const timeEnd: number = new Date().getTime() + duration;
      intervalId = window.setInterval(() => {
        const remaining: number = Math.max((timeEnd - new Date().getTime()) / duration, 0);
        const value: number = Math.round(end - remaining * range);
        setCountUp(value);
        value === end && clearInterval(intervalId);
      }, step);
    }, delay);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [start, end, duration, delay]);

  return countUp;
};

export default useAnimateValue;

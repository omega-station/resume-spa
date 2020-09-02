import React from 'react';
// import CountUp from 'react-count-up';
import { useCountUp } from 'react-countup';
import defaults from './defaults';
import { Props } from './definition';
import StyledChartCircle from './style';

const ChartCircle = (props: Props) => {
  // const { isVisible, index, label, percent }: Props = { ...defaults, ...props };
  const { index, label, percent }: Props = { ...defaults, ...props };
  const animation: { [key: string]: number } = {
    index,
    delay: index * 0.275,
    duration: 1.5,
    percent: 3,
  };

  // const { countUp, reset, start } = useCountUp({ delay: animation.delay, duration: animation.duration, end: percent, start: 0, useEasing: true });
  const { countUp } = useCountUp({ delay: animation.delay, duration: animation.duration, end: percent, start: 0, useEasing: true });

  // useEffect(() => {
  //   !!isVisible && start();
  //   return () => reset();
  // }, [isVisible, reset, start]);

  return (
    <StyledChartCircle animation={animation} percent={percent}>
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text>{countUp}%</text>
      </svg>
      <span>{label}</span>
      {/* <CountUp value={1000000} interval={5} incrementMin={1} incrementMax={10} /> */}
    </StyledChartCircle>
  );
};

export default ChartCircle;

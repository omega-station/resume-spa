import _ from 'lodash';
import React from 'react';
// import { useCountUp } from 'react-countup';
import defaults from './defaults';
import { Props } from './definition';
import StyledChartCircle from './style';

const ChartCircle = (props: Props) => {
  const { index, label, percent }: Props = { ...defaults, ...props };
  const animation: { [key: string]: any } = {
    key: `${label.replace(/[ +]+/g, '-')}-${index}`,
    percent,
    delay: _.round(index * 0.275, 2),
    duration: 2,
    offset: 3,
  };

  // const { countUp } = useCountUp({
  //   delay: animation.delay,
  //   duration: animation.duration,
  //   end: percent,
  //   start: 0,
  //   useEasing: true,
  // });

  return (
    <StyledChartCircle animation={animation}>
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        {/* <text>{countUp}%</text> */}
        <text x="50%" y="60%">
          {percent}%
        </text>
      </svg>
      <span>{label}</span>
    </StyledChartCircle>
  );
};

export default ChartCircle;

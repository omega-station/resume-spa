import React from 'react';
import { useCountUp } from 'react-countup';
import defaults from './defaults';
import { Props } from './definition';
import StyledChartCircle from './style';

const ChartCircle = (props: Props) => {
  const { isWaypoint, index, label, percent }: Props = { ...defaults, ...props };
  const { countUp } = useCountUp({ start: 0, end: percent, duration: 2, delay: (index + 1) * 0.5, suffix: '%' });
  return (
    <StyledChartCircle isWaypoint={isWaypoint} index={index} percent={percent}>
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        {isWaypoint && <text>{countUp}</text>}
      </svg>
      <span>
        {label} {isWaypoint && countUp}
      </span>
    </StyledChartCircle>
  );
};

export default ChartCircle;

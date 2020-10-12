import _ from 'lodash';
import React from 'react';
import useAnimateValue from '../../../hooks/useAnimateValue';
import defaults from './defaults';
import { Props } from './definition';
import StyledChartCircle from './style';

const ChartCircle = (props: Props) => {
  const { index, label, percent }: Props = { ...defaults, ...props };
  const animation: { [key: string]: string | number } = {
    key: `${label.replace(/[ +]+/g, '-')}-${index}`,
    percent,
    delay: _.round(index * 0.275, 2) * 1000,
    duration: 1500,
    offset: 3,
  };

  const countUp = useAnimateValue(0, percent, animation.duration as number, animation.delay as number);

  return (
    <StyledChartCircle animation={animation}>
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text x="51%" y="62%">
          {countUp}%
        </text>
      </svg>
      <span>{label}</span>
    </StyledChartCircle>
  );
};

export default ChartCircle;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './icons.types';

export const ArrowRightIcon = ({ width = 40, height = 40, color = '#000000', style }: IconProps) => (
  <Svg width={width} height={height} fill="none" style={style} viewBox="0 0 24 24">
    <Path
      d="M9.922 17.25L15 12.087 9.75 6.75"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

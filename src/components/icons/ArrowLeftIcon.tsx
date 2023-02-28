import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './icons.types';

export const ArrowLeftIcon = ({ width = 10, height = 16, color = '#000000', style }: IconProps) => (
  <Svg width={width} height={height} fill="none" style={style} viewBox="0 0 10 16">
    <Path
      d="M9.038 15.07c.53-.523.53-1.378 0-1.902L4.183 8.36a.506.506 0 010-.72L9.04 2.832A1.338 1.338 0 007.157.929L.487 7.52a.677.677 0 000 .962l6.67 6.59c.52.515 1.36.515 1.88 0z"
      fill={color}
    />
  </Svg>
);

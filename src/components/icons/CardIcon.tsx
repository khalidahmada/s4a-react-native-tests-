import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './icons.types';

type Props = IconProps & {
  shapeColor?: string;
};

export const CardIcon = ({ width = 41, height = 32, color = '#000000', shapeColor = '#fff', style }: Props) => (
  <Svg width={width} height={height} fill="none" style={style} viewBox="0 0 41 32">
    <Path
      d="M38.285 0H2.715C1.375 0 .289 1.146.289 2.56v26.88C.29 30.854 1.375 32 2.715 32h35.57c1.34 0 2.426-1.146 2.426-2.56V2.56c0-1.414-1.086-2.56-2.426-2.56z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.613 16.013c1.334 6.776-.019 9.42-.557 10.654 1.394-1.955 3.492-6.346 2.585-10.961-1.188-6.047-.59-8.638.303-10.374-3.136 4.54-2.796 8.32-2.33 10.68z"
      fill={shapeColor}
    />
  </Svg>
);

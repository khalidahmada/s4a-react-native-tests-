import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './icons.types';

type Props = IconProps & {
  shapeColor?: string;
};

export const CardIcon = ({ width = 10, height = 16, color = '#0000', shapeColor = '#fff', style }: Props) => (
  <Svg width={width} height={height} fill="none" style={style} viewBox="0 0 10 16">
    <Path
      d="M37.996 0H2.426C1.085 0 0 1.146 0 2.56v26.88C0 30.854 1.086 32 2.425 32h35.57c1.34 0 2.426-1.146 2.426-2.56V2.56c0-1.414-1.086-2.56-2.425-2.56z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.324 16.013c1.334 6.776-.02 9.42-.558 10.655 1.395-1.956 3.493-6.347 2.586-10.962-1.189-6.047-.59-8.638.303-10.373-3.136 4.538-2.797 8.32-2.331 10.68z"
      fill={shapeColor}
    />
  </Svg>
);

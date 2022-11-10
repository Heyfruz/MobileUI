import { StyleSheet, View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

import { Text } from '../General';

import { layout, pallets } from 'constant';

interface Props {
  percentage?: number;
  radius?: number;
  strokeWidth?: number;
  max?: number;
  totalSpent?: number;
}

const { fonts } = layout;

export default function InsightPercent({
  radius = 96,
  percentage = 70,
  strokeWidth = 3,
  totalSpent,
  max = 100,
}: Props): JSX.Element | null {
  const halfCircle = radius + strokeWidth;
  const circumference = 2 * Math.PI * radius;

  const maxPercentage = (100 * percentage) / max;
  const offset = circumference + (circumference * maxPercentage) / 100;

  return (
    <View style={{ height: radius * 2, width: radius * 2 }}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={pallets.grey2}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={0.2}
            fill="transparent"
          />
          <Circle
            cx="50%"
            cy="50%"
            stroke={pallets.primary}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="butt"
          />
        </G>
      </Svg>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text color={pallets.primary} variant="medium" size={fonts.title1}>
          ${totalSpent}
        </Text>
        <Text color={pallets.grey3} size={fonts.caption2}>
          {percentage}% Spent
        </Text>
      </View>
    </View>
  );
}

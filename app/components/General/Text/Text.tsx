import { Text as RNText } from 'react-native';

import { Props, TextStyleProps, TextStyleType } from './types';

import { layout, pallets } from 'constant';

const { fonts } = layout;

export default function Text({
  children,
  style,
  color,
  variant,
  size,
  lineHeight,
  textTransform,
  textAlign,
  ...props
}: Props): JSX.Element {
  let textStyle: TextStyleProps = {};

  const defaultStyle: TextStyleType = {
    color: color ? color : pallets.text,
    lineHeight: lineHeight ? lineHeight : undefined,
  };

  switch (variant) {
    case 'title':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Inter-Bold',
        fontSize: size ? size : fonts.largeTitle,
      };
      break;
    case 'semiBold':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Inter-SemiBold',
        fontSize: size ? size : fonts.body,
      };
      break;
    case 'bold':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Inter-Bold',
        fontSize: size ? size : fonts.body,
      };
      break;
    case 'medium':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Inter-Medium',
        fontSize: size ? size : fonts.body,
      };
      break;
    case 'light':
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Inter-Light',
        fontSize: size ? size : fonts.body,
      };
      break;
    default:
      textStyle = {
        ...defaultStyle,
        fontFamily: 'Inter-Regular',
        fontSize: size ? size : fonts.body,
      };
  }

  return (
    <RNText style={[textStyle, { textAlign, textTransform }, style]} {...props}>
      {children}
    </RNText>
  );
}

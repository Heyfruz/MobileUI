import { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import { Text } from '../General';

import { layout, pallets } from 'constant';

const { height, inputRadius, borderWidth } = layout.input;
const { subhead } = layout.fonts;

interface Props extends TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  error?: boolean;
  errorMessage?: string;
  marginBottom?: number;
  placeholderColor?: string;
  disabled?: boolean;
  valid?: boolean;
  note?: string;
  noteVisible?: boolean;
  placeholder?: string;
  rightLabel?: string;
  onRightLabelPress?: () => void;
}

const FormInput = forwardRef<TextInput, Props>(function (
  {
    value,
    onChangeText,
    error,
    placeholderColor,
    marginBottom = 15,
    errorMessage,
    disabled,
    rightLabel,
    onRightLabelPress,
    noteVisible,
    placeholder,
    ...props
  }: Props,
  ref,
): JSX.Element | null {
  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: pallets.grey,
            borderColor: disabled
              ? pallets.inactive
              : error
              ? pallets.red
              : pallets.border,
          },
        ]}>
        <TextInput
          editable={!disabled}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor || pallets.darkGrey}
          style={[
            styles.input,
            {
              color: pallets.text,
              fontFamily: 'Inter-Regular',
            },
          ]}
          {...{ onChangeText, ref, value, ...props }}
        />
        {Boolean(rightLabel) && (
          <TouchableOpacity
            style={styles.rightBox}
            onPress={onRightLabelPress}
            activeOpacity={0.5}>
            <Text color={pallets.primary} size={subhead} variant="medium">
              {rightLabel}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom,
          marginTop: noteVisible || error ? 5 : 0,
        }}>
        {error && (
          <View
            style={{
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <Text variant="light" size={subhead} color={pallets.red}>
              {errorMessage}
            </Text>
          </View>
        )}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: inputRadius,
    borderWidth: borderWidth,
    flexDirection: 'row',
    height,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
  note: {
    alignItems: 'flex-end',
    flex: 1,
  },
  rightBox: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingRight: 10,
  },
});

export default FormInput;

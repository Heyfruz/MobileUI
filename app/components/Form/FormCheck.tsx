import { StyleSheet, TouchableOpacity } from 'react-native';
import { useFormikContext } from 'formik';

import { Text } from 'components';
import { Icon } from 'assets';
import { layout, pallets } from 'constant';

const { subhead } = layout.fonts;

interface CheckFieldKeys {
  save: boolean;
  promotion: false;
}

interface Props {
  name: keyof CheckFieldKeys;
  label: string;
}

export default function FormCheck({ label, name }: Props): JSX.Element | null {
  const { setFieldTouched, setFieldValue, values, errors } =
    useFormikContext<CheckFieldKeys>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onBlur={() => setFieldTouched(name)}
      onPress={() => setFieldValue(name, !values[name])}>
      <Icon
        size={20}
        name={values[name] ? 'box-tick' : 'box'}
        style={{ marginRight: 8 }}
        color={
          errors[name]
            ? pallets.red
            : values[name]
            ? pallets.black
            : pallets.grey
        }
      />
      <Text
        textTransform="capitalize"
        size={subhead}
        color={pallets.grey2}
        style={{ flex: 1 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

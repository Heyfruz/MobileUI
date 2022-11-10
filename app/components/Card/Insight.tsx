import { StyleSheet, View } from 'react-native';

import { Text } from '../General';

import { pallets } from 'constant';

interface Props {
  label: string;
  statistic: string;
  iconColor: string;
}

export default function Insight({
  label,
  statistic,
  iconColor = pallets.primary,
}: Props): JSX.Element | null {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.tag, { backgroundColor: iconColor }]} />
        <Text variant="medium">{label}</Text>
      </View>
      <Text>{statistic}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tag: {
    borderRadius: 16 / 2,
    height: 16,
    marginRight: 16,
    width: 16,
  },
});

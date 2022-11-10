import { FlatList, StyleSheet, View } from 'react-native';

import { insightData } from './Data';

import {
  Container,
  Header,
  InsightCard,
  InsightPercent,
  Text,
  VirtualScroll,
} from 'components';
import { layout, pallets } from 'constant';
import { getTotalAmount } from 'utils';

const { fonts } = layout;

const total = insightData.map(i => i.amount).reduce(getTotalAmount);
const budget = 2000;
const totalPercentage = (total / budget) * 100;

const getPercentage = (amount: number): number => (amount / budget) * 100;

export default function Insight(): JSX.Element {
  return (
    <>
      <Header title="Insight" hideLeftComp />
      <VirtualScroll>
        <Container>
          <View style={styles.insight}>
            <InsightPercent percentage={totalPercentage} totalSpent={total} />
          </View>
          <Text variant="medium" size={fonts.title2}>
            Expenses
          </Text>
          <FlatList
            data={insightData}
            keyExtractor={(_, i) => i.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ borderColor: pallets.grey3, borderWidth: 0.5 }} />
            )}
            ListHeaderComponent={<View style={{ height: 16 }} />}
            renderItem={({ item, index }) => {
              return (
                <InsightCard
                  label={item.label}
                  statistic={String(getPercentage(item.amount))}
                  iconColor={
                    index % 2 === 0 ? pallets.primary : pallets.secondary
                  }
                />
              );
            }}
          />
        </Container>
      </VirtualScroll>
    </>
  );
}

const styles = StyleSheet.create({
  insight: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
});

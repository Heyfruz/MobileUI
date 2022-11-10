import React, { memo, useMemo } from 'react';
import { FlatListProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const emptyData: [] = [];
const renderNullItem = () => null;

type ExtendProps = Omit<FlatListProps<[]>, 'data' | 'renderItem'>;

interface Props extends ExtendProps {
  children: React.ReactNode;
  data?: [];
}

const VirtualScroll = memo(function ({
  children,
  ...props
}: Props): JSX.Element | null {
  return (
    <FlatList
      {...props}
      data={emptyData}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={renderNullItem}
      ListFooterComponent={useMemo(
        () => (
          <>{children}</>
        ),
        [children],
      )}
    />
  );
});

export default VirtualScroll;

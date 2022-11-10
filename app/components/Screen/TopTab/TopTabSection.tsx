import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  FlatListProps,
  Pressable,
  StyleSheet,
  TextProps,
  View,
  useWindowDimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { layout, pallets } from 'constant';

const { spacing, fonts } = layout;

export interface SectionData<T> {
  title: string;
  data: T[];
}

interface Props<T> {
  data: SectionData<T>[];
  contentFlatListProps: Omit<
    FlatListProps<T>,
    'horizontal' | 'data' | 'style' | 'ItemSeparatorComponent'
  >;
  onChangeIndex?: (index: number) => void;
  tabColor?: string;
  iconSize?: number;
}

export default function TopTabSection<T>({
  contentFlatListProps: flatListProps,
  data,
  onChangeIndex,
  tabColor,
}: Props<T>): JSX.Element | null {
  const scrollRef = useRef<FlatList>(null);
  const scrollOffset = useSharedValue(0);
  const componentVisibility = useSharedValue(0);
  const [sectionContent, setSectionContent] = useState<T[][]>([]);
  const [sectionHeading, setSectionHeading] = useState<string[]>([]);
  const { width } = useWindowDimensions();
  const listWidth = width - spacing.padding * 2;

  useEffect(() => {
    const { content, heading } = splitData(data);
    setSectionHeading(heading);
    setSectionContent(content);
  }, [data]);

  useEffect(() => {
    if (sectionContent.length > 0 && sectionHeading.length > 0) {
      componentVisibility.value = withTiming(1, { duration: 250 });
    }
  }, [componentVisibility, sectionContent, sectionHeading]);

  const AnimatedFlatList = useMemo(
    () => Animated.createAnimatedComponent<FlatListProps<T[]>>(FlatList),
    [],
  );

  const animatedIndicatorStyle = useAnimatedStyle(
    () => ({
      backgroundColor: tabColor || pallets.white,
      left: scrollOffset.value / (sectionHeading.length || 1),
      width: listWidth / (sectionHeading.length || 1),
    }),
    [sectionHeading.length, listWidth],
  );

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: componentVisibility.value,
  }));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollOffset.value = contentOffset.x;
    },
  });

  const handleScroll = useCallback((index: number) => {
    scrollRef.current?.scrollToIndex({ animated: true, index });
  }, []);

  return (
    <Animated.View style={[{ flex: 1 }, animatedContainerStyle]}>
      <View
        style={[
          styles.headerContainer,
          {
            backgroundColor: pallets.grey,
            borderColor: pallets.border,
          },
        ]}>
        {sectionHeading.length > 0 && (
          <View style={[styles.header]}>
            {sectionHeading.map((item, index) => {
              return (
                <Pressable
                  key={item}
                  onPress={() => {
                    handleScroll(index);
                    onChangeIndex && onChangeIndex(index);
                  }}
                  style={{
                    borderColor: pallets.border,
                    height: 20,
                    justifyContent: 'center',
                    width: listWidth / (sectionHeading.length || 1),
                  }}>
                  <AnimatedHeaderText
                    style={{ textAlign: 'center' }}
                    {...{ index, listWidth, scrollOffset }}>
                    {item}
                  </AnimatedHeaderText>
                </Pressable>
              );
            })}
          </View>
        )}
        <Animated.View style={[styles.indicator, animatedIndicatorStyle]} />
      </View>
      <AnimatedFlatList
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={scrollRef}
        data={sectionContent}
        listKey="key-2"
        nestedScrollEnabled={false}
        snapToInterval={listWidth}
        decelerationRate="fast"
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FlatList
            bounces={false}
            style={[{ width: listWidth }]}
            data={item}
            listKey="key-3"
            showsVerticalScrollIndicator={false}
            initialNumToRender={5}
            ListEmptyComponent={<View />}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            contentContainerStyle={{ paddingVertical: spacing.s }}
            {...flatListProps}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
      />
    </Animated.View>
  );
}

interface AnimatedTextProps extends TextProps {
  index: number;
  scrollOffset: Animated.SharedValue<number>;
  listWidth: number;
}
const AnimatedHeaderText = ({
  index,
  scrollOffset,
  style,
  listWidth,
  ...props
}: AnimatedTextProps) => {
  const animatedTextStyle = useAnimatedStyle(
    () => ({
      color: interpolateColor(
        scrollOffset.value,
        [(index - 1) * listWidth, index * listWidth, (index + 1) * listWidth],
        [pallets.grey3, pallets.primary, pallets.grey3],
      ),
    }),
    [listWidth],
  );

  return (
    <Animated.Text
      {...props}
      style={[
        style,
        animatedTextStyle,
        {
          fontFamily: 'Inter-Bold',
          fontSize: fonts.footnote,
        },
      ]}
    />
  );
};

const splitData = <T,>(_: SectionData<T>[]) => {
  const result = _.reduce<{
    heading: string[];
    content: T[][];
  }>(
    (prev, curr) => {
      prev.heading.push(curr.title);
      prev.content.push(curr.data);
      return prev;
    },
    { content: [], heading: [] },
  );
  return result;
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    height: 50,
    zIndex: 2,
  },
  headerContainer: {
    borderRadius: 25,
    borderWidth: 2,
    marginBottom: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  indicator: {
    borderRadius: 25,
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
});

//This is a very complicated solution for a very simple task. I think part of the problem or the reason why this component was used was that
//Initial trial with React-Navigation-Material-Top-Tab turned out to be not so efficient as needed

//This solution is not yet perfect, there're multiple solution to solve this problem which includes creating a custom scrollview which may not be explored at the moment because of time

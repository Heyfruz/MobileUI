import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../General';

import { useHeaderHeight } from 'hooks';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';

const { fonts, spacing } = layout;

interface Props {
  backgroundColor?: string;
  handleCloseIcon?: () => void;
  hideLeftComp?: boolean;
  itemColor?: string;
  leftLabel?: string;
  onLeftLabelPress?: () => void;
  onRightLabelPress?: () => void;
  rightLabel?: string;
  showCloseIcon?: boolean;
  title: string;
}

type ExtendProps = Omit<
  Props,
  'title' | 'backgroundColor' | 'rightLabel' | 'onRightLabelPress'
>;

interface BackProps extends ExtendProps {
  canGoBack: boolean;
  handleBack: () => void;
}

export default function Header({
  title,
  showCloseIcon,
  handleCloseIcon,
  leftLabel,
  hideLeftComp,
  itemColor,
  rightLabel,
  onLeftLabelPress,
  backgroundColor,
  onRightLabelPress,
}: Props): JSX.Element {
  const { insets, headerHeight } = useHeaderHeight();
  const navigation = useNavigation();

  const handleBack = () => navigation.canGoBack() && navigation.goBack();
  const canGoBack = navigation.canGoBack();

  return (
    <>
      <View style={{ backgroundColor, height: insets.top }} />
      <View
        style={[
          styles.header,
          {
            backgroundColor,
            height: headerHeight - insets.top,
            paddingHorizontal: spacing.padding,
          },
        ]}>
        <View style={styles.headerActions}>
          <Back
            {...{
              canGoBack,
              handleBack,
              handleCloseIcon,
              hideLeftComp,
              itemColor,
              leftLabel,
              onLeftLabelPress,
              showCloseIcon,
            }}
          />
          {Boolean(rightLabel) && (
            <TouchableOpacity activeOpacity={0.7} onPress={onRightLabelPress}>
              <Text
                variant="medium"
                size={fonts.subhead}
                color={itemColor || pallets.primary}>
                {rightLabel || 'Go'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.titleBox}>
          <Text variant="semiBold" size={fonts.title1} color={itemColor}>
            {title}
          </Text>
        </View>
      </View>
    </>
  );
}

const Back = ({
  canGoBack,
  handleBack,
  hideLeftComp,
  showCloseIcon,
  handleCloseIcon,
  itemColor,
  onLeftLabelPress,
  leftLabel,
}: BackProps): JSX.Element => {
  switch (true) {
    case hideLeftComp:
      return <View />;
    case Boolean(leftLabel):
      return (
        <TouchableOpacity activeOpacity={0.7} onPress={onLeftLabelPress}>
          <Text
            variant="medium"
            size={fonts.subhead}
            color={itemColor || pallets.primary}>
            {leftLabel}
          </Text>
        </TouchableOpacity>
      );
    case canGoBack && !showCloseIcon:
      return (
        <TouchableOpacity activeOpacity={0.7} onPress={handleBack}>
          <Text
            variant="medium"
            size={fonts.subhead}
            color={itemColor || pallets.primary}>
            {leftLabel || 'Back'}
          </Text>
        </TouchableOpacity>
      );
    case showCloseIcon:
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            handleCloseIcon?.() || handleBack();
          }}>
          <Icon name="close" size={20} color={pallets.darkGrey} />
        </TouchableOpacity>
      );
    default:
      return <View />;
  }
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerActions: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleBox: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    left: spacing.padding,
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
});

import { Image, StyleSheet, View } from 'react-native';

import { Text } from '../General';

import { layout, pallets } from 'constant';
import { formatRelative } from 'utils';

interface Props {
  variant?: 'posts' | 'photos';
  image: string[];
  title: string;
  description: string;
  date: number;
}

const { fonts } = layout;

export default function Post({
  variant,
  date,
  description,
  image,
  title,
}: Props): JSX.Element | null {
  switch (variant) {
    case 'photos':
      return (
        <View style={{ marginVertical: 16 }}>
          <Image source={{ uri: image[0] }} style={styles.photoImage} />
          <Text variant="semiBold" size={fonts.subhead}>
            {title}
          </Text>
          <View style={{ height: 8 }} />
          <Text size={fonts.footnote}>{description}</Text>
          <View style={{ height: 8 }} />
          <Text size={fonts.footnote}>{formatRelative(date)}</Text>
        </View>
      );
    case 'posts':
      return (
        <View style={styles.postContainer}>
          <View>
            <Image source={{ uri: image[0] }} style={styles.postImage} />
          </View>
          <View style={{ flex: 1 }}>
            <View style={[styles.row, { marginBottom: 8 }]}>
              <Text variant="semiBold" size={fonts.subhead}>
                {title}
              </Text>
              <Text size={fonts.footnote}>{formatRelative(date)}</Text>
            </View>
            <Text size={fonts.footnote}>{description}</Text>
          </View>
        </View>
      );
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  photoImage: {
    backgroundColor: pallets.grey,
    borderRadius: 8,
    height: 240,
    marginBottom: 8,
    width: '100%',
  },
  postContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  postImage: {
    backgroundColor: pallets.grey,
    borderRadius: 8,
    height: 50,
    marginRight: 16,
    width: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

// export default React.memo(
//   Post,
//   (newProps, oldProps) => newProps.id === oldProps.id,
// );

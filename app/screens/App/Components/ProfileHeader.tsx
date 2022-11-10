import { Image, StyleSheet, View } from 'react-native';

import { pallets } from 'constant';

const IMG_SIZE = 158;
const imageUri = 'https://source.unsplash.com/_cvwXhGqG-o/1000x1000';

export default function ProfileHeader(): JSX.Element | null {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallets.primary,
    height: IMG_SIZE,
    marginBottom: IMG_SIZE * 0.25,
  },
  image: {
    height: IMG_SIZE,
    width: IMG_SIZE,
  },
  imageBox: {
    alignSelf: 'center',
    borderColor: pallets.white,
    borderRadius: IMG_SIZE / 2,
    borderWidth: 4,
    marginTop: IMG_SIZE * 0.25,
    overflow: 'hidden',
  },
});

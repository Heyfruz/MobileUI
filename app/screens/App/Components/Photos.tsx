import { FlatList } from 'react-native-gesture-handler';

import { posts } from '../Data';

import { PostCard } from 'components';

export default function Photos(): JSX.Element {
  return (
    <FlatList
      data={posts}
      disableVirtualization
      scrollEnabled={false}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => {
        return (
          <PostCard
            variant="photos"
            date={item.date}
            description={item.description}
            image={item.image}
            title={item.title}
          />
        );
      }}
    />
  );
}

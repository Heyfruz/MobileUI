import { FlatList } from 'react-native-gesture-handler';

import { posts } from '../Data';

import { PostCard } from 'components';

export default function Posts(): JSX.Element {
  return (
    <FlatList
      data={posts}
      disableVirtualization
      scrollEnabled={false}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => {
        return (
          <PostCard
            variant="posts"
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

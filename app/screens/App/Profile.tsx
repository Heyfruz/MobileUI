import { View } from 'react-native';

import { Photos, Posts, ProfileHeader } from './Components';

import {
  Container,
  Divider,
  Header,
  Text,
  TopTab,
  VirtualScroll,
} from 'components';
import { layout, pallets } from 'constant';

const { fonts } = layout;

export default function Profile(): JSX.Element {
  return (
    <>
      <Header
        title="Profile"
        leftLabel="Settings"
        rightLabel="Logout"
        backgroundColor={pallets.primary}
        onLeftLabelPress={() => console.log('Pressed')}
        onRightLabelPress={() => console.log('Logout')}
        itemColor={pallets.white}
      />
      <VirtualScroll bounces={false} listKey="0">
        <ProfileHeader />
        <Container>
          <Text textAlign="center" variant="semiBold" size={fonts.title1}>
            Victoria Robertson
          </Text>
          <Text textAlign="center" variant="semiBold" style={{ marginTop: 8 }}>
            A mantra goes here
          </Text>
          <View style={{ height: 32 }} />
          <TopTab
            data={[
              {
                data: [
                  <View key={1} style={{}}>
                    <Posts />
                  </View>,
                ],
                title: 'Posts',
              },
              {
                data: [
                  <View key={3} style={{}}>
                    <Photos />
                  </View>,
                ],
                title: 'Photos',
              },
            ]}
            contentFlatListProps={{
              keyExtractor: (_, index) => index.toString(),
              renderItem: ({ item }) => <View>{item}</View>,
            }}
          />
          <Divider />
        </Container>
      </VirtualScroll>
    </>
  );
}

import {useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabView} from 'react-native-tab-view';
import DiscoverScreens from '../Screens/DiscoverScreens';
import NewsScreen from '../Screens/NewsScreen';

 export default function InshortTabs() {
  const layout = useWindowDimensions();

  const { index, setIndex } = useState(0);

  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreens,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

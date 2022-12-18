import { useState } from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel'

import ScreenContainer from './src/components/ScreenContainer';
import { Item, items } from './src/data/items';
import { colors } from './src/utils/colors';

const {width: screenWidth} = Dimensions.get('screen')

export default function App() {

  const [activeIndex, setActiveIndex] = useState(0)

  const renderItem = (item: Item) => {
    return <ScreenContainer item={item} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => {
          setActiveIndex(index)
        }}
      />
      <Pagination 
        containerStyle={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center'
         }}
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotColor={colors.dotActiveColor}
        inactiveDotColor='grey'
        dotStyle={{
          width: 9,
          height: 9,
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

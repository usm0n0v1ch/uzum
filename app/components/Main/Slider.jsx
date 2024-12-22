import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

const data = [
  { id: '1', title: 'First Slide', image: 'https://www.spot.uz/media/img/2024/09/dB7DRA17264717864469_b.jpg' },
  { id: '2', title: 'Second Slide', image: 'https://www.spot.uz/media/img/2024/09/5xGH2t17264916625809_b.jpg' },
  { id: '3', title: 'Third Slide', image: 'https://www.spot.uz/media/img/2024/09/L0HV3C17264916629481_b.jpg' },
];

const Slider = () => {
  const { width } = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item) => (
          <View key={item.id} style={[styles.slide, { width }]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
});

export default Slider;
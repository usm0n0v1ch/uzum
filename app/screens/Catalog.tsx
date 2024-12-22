import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Animated, { 
  useSharedValue, 
  withTiming, 
  useAnimatedStyle 
} from 'react-native-reanimated';

const Catalog = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const renderItem = ({ item }) => {
    const translateX = useSharedValue(-300);
    const rotate = useSharedValue(-360);

    useEffect(() => {
      translateX.value = withTiming(0, { duration: 1000 });
      rotate.value = withTiming(0, { duration: 1000 });
    }, []);

    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: translateX.value },
          { rotate: `${rotate.value}deg` },
        ],
      };
    });

    return (
      <Animated.View style={[styles.item, animatedStyles]}>
        <Text style={styles.itemText}>{item}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  item: {
    width: 300,
    height: 60,
    backgroundColor: 'teal',
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Catalog;

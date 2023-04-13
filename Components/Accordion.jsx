import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, LayoutChangeEvent } from 'react-native';



const Accordion = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const rotateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const containerHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  // const onLayout = (event) => {
  //   const { height } = event.nativeEvent.layout;
  //   if (isExpanded) {
  //     animation.setValue(1);
  //     containerHeight.setValue(height);
  //   }
  // };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Animated.Text style={[styles.arrow, { transform: [{ rotate: rotateInterpolation }] }]}>▼</Animated.Text>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.contentContainer, { height: containerHeight }]}>
        {/* <View onLayout={onLayout}>{children}</View> */}
        <View >{children}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
  },
  contentContainer: {
    overflow: 'hidden',
    padding: 10,
  },
});


export default Accordion;

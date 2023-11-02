import React from 'react';
import { View, StyleSheet, Pressable, Animated } from 'react-native';

type BEAD_PROP = {
  counter: number,
  setCounter: (c: number)=>void,
  beads: Array<number>,
  beadMovements: Array<any>
}

const BeadComponent = ({ counter, setCounter,beads, beadMovements }: BEAD_PROP) => {
  

  const animateBead = (index: number) => {
    Animated.timing(beadMovements[index], {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true
    }).start();
  };

  console.log(beadMovements);

  const animatedBeadStyles = (index: number) => {
    console.log("index",index)
    return {
      transform: [
        {
          translateX: beadMovements[index].interpolate({
            inputRange: [0, 1],
            outputRange: [index * 15, index * 15 + 110],
          }),
        },
        {
          translateY: beadMovements[index].interpolate({
            inputRange: [0, 1],
            outputRange: [-index * 14, -index * 14 - 110],
          }),
        },
      ],
    };
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (counter < 14) {
          animateBead(beads.length - (counter+1));
          setCounter(counter + 1);
        }
      }}>
      <View style={[styles.container, { backgroundColor: 'gray' }]}>
        {beads.map((_: any, index: number) => (
          <Animated.View
            key={index}
            style={[
              styles.bead,
              index + 1  > beads.length - counter
                ? animatedBeadStyles(index)
                : {
                    transform: [
                      {
                        translateX: index * 15
                      },
                      {
                        translateY: - index * 14
                      },
                    ],
                  },
            ]}
          />
        ))}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bead: {
    marginTop: 180,
    width: 22,
    height: 22,
    backgroundColor: 'rgba(191, 85, 236,0.7)',
    borderRadius: 18,
    position: 'absolute',
    right: 145,
  },
});

export default BeadComponent;

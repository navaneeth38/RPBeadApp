import React,{useState,useRef} from 'react'
import {  SafeAreaView, StyleSheet, View,Animated } from 'react-native';
import BeadComponent from './components/BeadView'


import AssetCard from './components/AssetCard';

export default function App() {

  const [counter,setCounter] = useState<number>(0)

  const beads = new Array(14).fill(0);
  const beadMovements = useRef(beads.map(() => new Animated.Value(0))).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <AssetCard counter={counter} setCounter={setCounter} beadMovements={beadMovements} />
      </View>
      <BeadComponent counter={counter} setCounter={setCounter} beads={beads} beadMovements={beadMovements} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(218, 223, 225,1)',
    padding: 8,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 6,
    marginTop: 10,
    borderRadius: 10,
     shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
});

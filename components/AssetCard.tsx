import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

type ASSET_PROP = {
  counter: number,
  setCounter: (c: number)=>void,
  beadMovements: Array<any>
}
export default function AssetCard ({counter,setCounter,beadMovements}: ASSET_PROP) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Kalima</Text>
        <Text style={styles.boldText}>Kalima e Shahadat</Text>
        <View style={{ flex: 1, flexDirection: 'row',alignItems: 'center',marginTop: 15}}>
         <View style={{width:15,height: 15,borderRadius: 15,backgroundColor: 'gray'}}/> 
         <Text style={{ marginLeft: 8,fontSize: 16}}>
         14<Text style={{ fontSize: 10, color: 'gray'}}>/33</Text>
         </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Round: {counter}</Text>
        <Text style={styles.text}> Total: 14</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>HISTORY</Text>
        </Pressable>
        <Pressable
         style={styles.button}
         onPress={()=>{ 
           setCounter(0)
           beadMovements.forEach(animVal => animVal.setValue(0));
           }}
         >
          <Text style={styles.buttonText}>RESET</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  bottomContainer: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: 'gray',
    fontSize: 10,
    fontWeight: 'bold',

  },
  boldText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5
  },
  buttonText: {
     fontSize: 10,
    fontWeight: 'bold',
    color: 'rgba(0, 143, 255, 0.91)',
    
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 167, 255, 0.15)',
    borderRadius: 8,
  }
});

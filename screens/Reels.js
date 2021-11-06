import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const image = { uri: "https://cdn.discordapp.com/attachments/689501353311207436/906261108447383572/unknown.png" };

const Reels = () => {
    return (
        
            <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    </ImageBackground>
  </View>
        
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default Reels;

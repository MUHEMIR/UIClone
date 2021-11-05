import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/headerlogo.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require('../../assets/add.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require('../../assets/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require('../../assets/message.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItem: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },

  iconsContainer: {
    flexDirection: 'row',
  },
  icons: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});

export default Header;

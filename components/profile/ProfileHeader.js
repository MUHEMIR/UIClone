import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>muh_emir_ghiff</Text>

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
            source={require('../../assets/menu.png')}
          />
        </TouchableOpacity>
        
            </View>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({

container: {
    justifyContent: 'space-between',
    alignItem: 'center',
    flexDirection: 'row',
},


headertext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
    marginTop: 5,
},

iconsContainer: {
    flexDirection: 'row',
  },
  icons: {
    width: 31,
    height: 31,
    marginLeft: 10,
    marginTop: 5,
    resizeMode: 'contain',
  },



})

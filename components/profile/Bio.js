import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Bio = () => {
    return (
        <View style={styles.container}>
            
            <Image source={require('../../assets/monagawr.jpg')} style={styles.profileimage} />
            
            <View style={styles.biotext}>
            <Text style={styles.uppertext}> 1 </Text>
            <Text style={styles.lowertext}> Post </Text>
            </View>

            <View style={styles.biotext}>
            <Text style={styles.uppertext}> 241 </Text>
            <Text style={styles.lowertext}> Followers </Text>
            </View>

            <View style={styles.biotext}>
            <Text style={styles.uppertext}> 1,609 </Text>
            <Text style={styles.lowertext}> Following </Text>
            </View>
        </View>

        
        
    );
}

export default Bio;

const styles = StyleSheet.create({

container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
},

profileimage:{
    width: 95,
    height: 95,
    borderRadius: 90,
    marginLeft: 5,
},

biotext:{
    justifyContent: 'center',
},

uppertext:{
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
},

lowertext:{
    
    color:'white',
    fontSize: 14,
},



})

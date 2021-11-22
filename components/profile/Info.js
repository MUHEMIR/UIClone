import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Info = () => {
    return (
            <View style={styles.container}>
            <Text style={styles.infoup}> Muhammad Emir Ghiffari </Text>
            <Text style={styles.info}> Memento Mori </Text>
            <Text style={styles.infolink}> https://muhemirghiff.z7.web.core.windows.net/ </Text>
            <View style={styles.buttoncontainer}>
            <Button title="Edit Profile" color="#141413" />
            </View>
        </View>

        
    )
}

export default Info

const styles = StyleSheet.create({

    container: {
        marginTop: 5,
    },

    infoup:{
    color:'white',
    fontWeight: 'bold',
},

info:{
    color:'white'
},

infolink:{
    color: '#0f63d1'
},

buttoncontainer: {
    marginTop: 15,
    width: 340,
    height: 35,
    marginLeft: 10,
    borderWidth: 0.8,
    borderColor: "#ffffff",
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
},



})

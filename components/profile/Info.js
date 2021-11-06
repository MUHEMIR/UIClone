import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Info = () => {
    return (
            <View style={styles.container}>
            <Text style={styles.infoup}> Muhammad Emir Ghiffari </Text>
            <Text style={styles.info}> Memento Mori </Text>
            <Text style={styles.infolink}> https://muhemirghiff.z7.web.core.windows.net/ </Text>
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

editbox:{
    borderColor: 'white',
}

})

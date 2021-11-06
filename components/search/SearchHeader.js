import React from 'react'
import { View, Text, StyleSheet,SafeAreaView, TextInput } from 'react-native'


const SearchHeader = () => {
    return (

        <View style={styles.container}>
        <TextInput style={styles.textin} placeholder={"Search"} />
         </View>
        
    )
};

const styles= StyleSheet.create({

    container: {
        
        
        flexDirection : 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 15,
    },

    textin: {
        backgroundColor: '#26292e',
        height: 45,
        width: 370,
        borderRadius: 20,
    }

})



export default SearchHeader;

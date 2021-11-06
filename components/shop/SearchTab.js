import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const SearchTab = () => {
    return (
        
             <View style={styles.container}>
        <TextInput style={styles.textin} placeholder={"Search Shop"} />
         </View>
        
    );
}

const styles = StyleSheet.create({

    container:{

        alignItems: 'center',
        marginTop: 10,
        marginLeft: 15,

    },

    textin: {
        backgroundColor: '#26292e',
        height: 45,
        width: 370,
        borderRadius: 20,
    }

})


export default SearchTab;



import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EditBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.editbox} />
            <View style={styles.arrowdown} />

        </View>
        
    )
}

export default EditBox

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
    },

    editbox: {
        borderColor: 'white',
    }


})

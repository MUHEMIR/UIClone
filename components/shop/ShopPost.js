import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ShopPost = () => {
    return (
        <View>
            
            <View style={styles.container}>
            <Image source={require('../../assets/aurelian.jpg') } style={styles.images} />
            <Image source={require('../../assets/rli-tshirt.jpg') } style={styles.images} />
            </View>

            <View style={styles.container}>
            <Image source={require('../../assets/gawrgurajacket.jpg') } style={styles.images} />
            <Image source={require('../../assets/georgevi.jpg') } style={styles.images} />
            </View>

             <View style={styles.container}>
            <Image source={require('../../assets/RAFbushjacket.jpg') } style={styles.images} />
            <Image source={require('../../assets/webley.jpg') } style={styles.images} />
            </View>

            <View style={styles.container}>
            <Image source={require('../../assets/nendo.jpg') } style={styles.images} />
            <Image source={require('../../assets/edwardviii.jpg') } style={styles.images} />
            </View>

            
        </View>
    )
}

export default ShopPost

const styles = StyleSheet.create({

    container: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    images: {
        width: 200,
        height: 200,
        marginLeft: 3,

    },
})

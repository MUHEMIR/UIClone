import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'

const SearchPost = () => {
    return (
            <View>
            <View style={styles.container}>
            <Image source={require('../../assets/bsap.jpg') } style={styles.images} />
            <Image source={require('../../assets/cyberpunk.jpg') } style={styles.images} />
            <Image source={require('../../assets/nimitz.jpg') } style={styles.images} />
            </View>

            <View style={styles.container}>
            <Image source={require('../../assets/pika.jpg') } style={styles.images} />
            <Image source={require('../../assets/rhodesiansas.jpg') } style={styles.images} />
            <Image source={require('../../assets/gawrgura.png') } style={styles.images} />
            </View>

             <View style={styles.container}>
            <Image source={require('../../assets/rhodesflag.jpg') } style={styles.images} />
            <Image source={require('../../assets/shrimp.jpg') } style={styles.images} />
            <Image source={require('../../assets/stophere.jpeg') } style={styles.images} />
            </View>

             <View style={styles.container}>
            <Image source={require('../../assets/together.jpg') } style={styles.images} />
            <Image source={require('../../assets/rli-parade.png') } style={styles.images} />
            <Image source={require('../../assets/degen.jpg') } style={styles.images} />
            </View>

            <View style={styles.container}>
            <Image source={require('../../assets/yourkingandcountry.jpg') } style={styles.images} />
            <Image source={require('../../assets/monagawr.jpg') } style={styles.images} />
            <Image source={require('../../assets/enlisttoday.jpg') } style={styles.images} />
            </View>

        </View>

            

        
    )
};

export default SearchPost;

const styles = StyleSheet.create({

    container: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    images: {
        width: 130,
        height: 130,
        marginLeft: 3,

    }

})

import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import {SHOP} from '../../data/shop';
const ShopPost = () => {
    return (
        <View style={styles.container}>
             <FlatList
                numColumns={2}
                data={SHOP}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                <Image source={{uri: item.image}} style={styles.images} />
                </TouchableOpacity>
                )} />
        </View>
    )
}

export default ShopPost;

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
        marginTop: 3,

    },
})

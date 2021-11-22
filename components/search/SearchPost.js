import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import {SEARCH} from '../../data/search';

const SearchPost = () => {
    return (
            <View style={styles.container}>

                
                <FlatList
                numColumns={3}
                data={SEARCH}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                <Image source={{uri: item.image}} style={styles.images} />
                </TouchableOpacity>
                )} />
                
            

        </View>

            

        
    )
};

export default SearchPost;

const styles = StyleSheet.create({

    container: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'column',
    },

    images: {
        width: 130,
        height: 130,
        marginLeft: 3,
        marginTop: 3,
        
    }

})

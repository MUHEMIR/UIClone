import React from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView} from 'react-native';
import ShopHeader from '../components/shop/ShopHeader';
import SearchTab from '../components/shop/SearchTab';
import ShopPost from '../components/shop/ShopPost';

const Shop = () => {
    return (
        <SafeAreaView style={styles.container}> 
        <ShopHeader />
        <SearchTab />
        <ShopPost />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'black',
    flex: 1,
    }

})

export default Shop;

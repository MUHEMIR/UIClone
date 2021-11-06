import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/search/SearchHeader'
import SearchPost from '../components/search/SearchPost'

const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView>
        <SearchPost />
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default Search

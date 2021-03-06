import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POST} from '../data/posts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView>
      <Stories />
        {POST.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};


    
  


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});


export default HomeScreen;


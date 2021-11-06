import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import Bio from '../components/profile/Bio';
import Info from '../components/profile/Info';


const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader />
            <Bio />
            <Info />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

container: {
    backgroundColor: 'black',
    flex: 1,
  },


});

export default Profile;




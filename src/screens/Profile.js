import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Copyright from '../components/Copyright';
import { useSelector } from "react-redux";
const Profile = ({ navigation }) => {
    const userData = useSelector(state => state.user.user);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />
            <ImageBackground
                source={require("../../assets/about-bg.jpg")}
                style={styles.backgroundImage}
                blurRadius={9}
            >


                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>{userData?.username}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}><Text style={styles.subtitle}>+91- {userData?.phone}</Text></TouchableOpacity>
                </View>
            </ImageBackground>

            {/* Our Channels Section */}

            <View style={styles.channelsSection}>
                <Text style={styles.channelsTitle}>Our Channels</Text>
                <View style={styles.channelIcons}>
                    <Image source={require('../../assets/ch-1.png')} style={styles.channelIcon} />
                    <Image source={require('../../assets/ch-2.png')} style={styles.channelIcon} />
                    <Image source={require('../../assets/ch-3.png')} style={styles.channelIcon} />
                </View>
                <View><Image source={require('../../assets/ch-4.png')} style={{ width: responsiveWidth(24), height: responsiveHeight(14), resizeMode: 'contain' }} /></View>
            </View>

            <Copyright />
        </ScrollView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(70),
        justifyContent: 'space-between',
        paddingTop: responsiveHeight(42)
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveHeight(3),
        alignItems: 'center',
    },
    logo: {
        width: responsiveWidth(25),
        height: responsiveHeight(5),
        resizeMode: 'contain',
    },
    menuIcon: {
        width: responsiveWidth(8),
        height: responsiveHeight(4),
        resizeMode: 'contain',
    },
    textContent: {
        marginBottom: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(8)
    },
    title: {
        fontSize: responsiveFontSize(6),
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: responsiveHeight(3)
    },
    subtitle: {
        fontSize: responsiveFontSize(4),
        color: '#fff',
        marginVertical: responsiveHeight(1),
        paddingBottom: responsiveHeight(3)
    },
    channelsSection: {
        backgroundColor: '#FFD700',
        paddingVertical: responsiveHeight(3),
        alignItems: 'center',
    },
    channelsTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: responsiveHeight(1),
    },
    channelIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: responsiveWidth(4),
    },
    channelIcon: {
        width: responsiveWidth(12),
        height: responsiveWidth(12),
        resizeMode: 'contain',
    },
});

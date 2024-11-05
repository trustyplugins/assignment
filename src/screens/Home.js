import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Footer from './Footer';
const screenWidth = Dimensions.get('window').width;
const Home = ({ navigation }) => {

    // const translateX = useRef(new Animated.Value(-100)).current;
    // useEffect(() => {
    //     Animated.loop(
    //         Animated.sequence([
    //             Animated.timing(translateX, {
    //                 toValue: screenWidth,
    //                 duration: 3000,
    //                 useNativeDriver: true,
    //             }),
    //             Animated.timing(translateX, {
    //                 toValue: -100, // Reset to start position
    //                 duration: 0,
    //                 useNativeDriver: true,
    //             }),
    //         ])
    //     ).start();
    // }, [translateX]);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={require("../../assets/media-event.jpg")}
                style={styles.backgroundImage}
            >
                <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.topTitle}>The Best Media Content</Text>
                    <Text style={styles.title}>Spanglish World Networks</Text>
                    <Text style={styles.subtitle}>The best content for you!</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>YouTube</Text>
                    </TouchableOpacity>
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
            <Footer />
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        justifyContent: 'space-between',
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
    topTitle: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: '#fff',
        paddingLeft: responsiveWidth(8),
        paddingBottom: responsiveHeight(3)
    },
    title: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: responsiveHeight(3)
    },
    subtitle: {
        fontSize: responsiveFontSize(2),
        color: '#fff',
        marginVertical: responsiveHeight(1),
        paddingBottom: responsiveHeight(3)
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(10),
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
        textAlign: "center"
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

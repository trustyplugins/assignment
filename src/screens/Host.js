import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Copyright from '../components/Copyright';

const Host = ({ navigation }) => {
    const hostImg = [
        {
            id: 1,
            img: require('../../assets/host-1.png')
        },
        {
            id: 2,
            img: require('../../assets/host-2.png')
        },
        {
            id: 3,
            img: require('../../assets/host-3.png')
        },
        {
            id: 4,
            img: require('../../assets/host-4.png')
        },
        {
            id: 5,
            img: require('../../assets/host-5.png')
        },
        {
            id: 6,
            img: require('../../assets/host-6.png')
        },
        {
            id: 7,
            img: require('../../assets/host-7.png')
        },
        {
            id: 8,
            img: require('../../assets/host-8.png')
        },
        {
            id: 9,
            img: require('../../assets/host-9.png')
        },
        {
            id: 10,
            img: require('../../assets/host-10.jpg')
        },
        {
            id: 11,
            img: require('../../assets/host-11.png')
        },
        {
            id: 12,
            img: require('../../assets/host-12.png')
        },
        {
            id: 13,
            img: require('../../assets/host-13.png')
        },
        {
            id: 14,
            img: require('../../assets/host-14.png')
        },
    ]

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={require("../../assets/host-bg.jpg")}
                style={styles.backgroundImage}
            >
                <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>Our Hosts</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}><Text style={styles.subtitle}>Home</Text></TouchableOpacity>
                </View>
            </ImageBackground>
            {
                hostImg.map((item) => (
                    <View key={item.id} style={{ width: responsiveWidth(100), alignItems: 'center', justifyContent: "center" }}>
                        <Image
                            source={item.img}
                            style={{ width: responsiveWidth(80), height: responsiveHeight(60), resizeMode: 'contain' }}
                        />
                    </View>
                ))
            }


            <Copyright />
        </ScrollView>
    );
};

export default Host;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        justifyContent: 'space-between',
        paddingTop: responsiveHeight(28)
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

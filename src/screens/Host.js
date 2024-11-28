import React, { useEffect, useRef } from 'react';
import { Linking, Alert } from 'react-native';
import { Platform } from 'react-native';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Copyright from '../components/Copyright';

const Host = ({ navigation }) => {

    const openLink = (url) => {
        if (url) {
            Linking.openURL(url).catch((err) => {
                Alert.alert('Error', 'Unable to open link');
                console.error('Error opening URL:', err);
            });
        } else {
            Alert.alert('Invalid URL', 'The provided URL is not valid.');
        }
    };
    const hostImg = [
        {
            id: 1,
            img: require('../../assets/host-1.png'),
            first_name:"Dr. Michelle",
            second_name:"Odette Green",
            sub_title:"Elevate Your Life",
            url:"https://www.youtube.com/watch?v=wS9-qOG0lzE&list=PL4DiGuiiYySdJPUyKDK3Qw20LN9DDHaxo&pp=iAQB"
        },
        {
            id: 2,
            img: require('../../assets/host-2.png'),
            first_name:"Ronny",
            second_name:"Laber",
            sub_title:"The Ronny Leber Show",
            url:"https://www.youtube.com/watch?v=64-CIi61n3U&list=PL4DiGuiiYySeAHoDVUuQ41TqKcBRgV35I&pp=iAQB"
        },
        {
            id: 3,
            img: require('../../assets/host-3.png'),
            first_name:"Laura",
            second_name:"Ollinger",
            sub_title:"The Positively Healthy Mom",
            url:"https://www.youtube.com/watch?v=Z-yXNxCc4ro&list=PL4DiGuiiYySd8luSYwEUHsYNksO_DSw0E&pp=iAQB"
        },
        {
            id: 4,
            img: require('../../assets/host-4.png'),
            first_name:"Paola",
            second_name:"Guthrie",
            sub_title:"Creando Propósito con Pao",
            url:"https://www.youtube.com/watch?v=2cF9qx7jWzI&list=PL4DiGuiiYySdl3eXAjv-eKgei3RKevZNT&pp=iAQB"
        },
        {
            id: 5,
            img: require('../../assets/host-5.png'),
            first_name:"Eric",
            second_name:"Stenlake",
            sub_title:"Energetic Life Now",
            url:"https://www.youtube.com/watch?v=bfDxMEupLR8&list=PL4DiGuiiYyScd6-N292fQWJbUp5Rd7ASu&pp=iAQB"
        },
        {
            id: 6,
            img: require('../../assets/host-6.png'),
            first_name:"Jorge",
            second_name:"Gamboa",
            sub_title:"Unstoppable Leaders",
            url:"https://www.youtube.com/watch?v=AUHfuYWf_t8&list=PL4DiGuiiYyScBsqf842_eP0U9CPhpHW-S&pp=iAQB"
        },
        {
            id: 7,
            img: require('../../assets/host-7.png'),
            first_name:"Sarah",
            second_name:"Weiss",
            sub_title:"Passion and Pickleball",
            url:"https://www.youtube.com/watch?v=xe3I4R7EdyY&list=PL4DiGuiiYySd-k7LGUe3NQUAQSjY-Pj8A&pp=iAQB"
        },
        // {
        //     id: 8,
        //     img: require('../../assets/host-8.png')
        // },
        // {
        //     id: 9,
        //     img: require('../../assets/host-9.png')
        // },
        // {
        //     id: 10,
        //     img: require('../../assets/host-10.jpg')
        // },
        // {
        //     id: 11,
        //     img: require('../../assets/host-11.png')
        // },
        // {
        //     id: 12,
        //     img: require('../../assets/host-12.png')
        // },
        // {
        //     id: 13,
        //     img: require('../../assets/host-13.png')
        // },
        // {
        //     id: 14,
        //     img: require('../../assets/host-14.png')
        // },
    ]

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />
            <ImageBackground
                source={require("../../assets/host-bg.jpg")}
                style={styles.backgroundImage}
                blurRadius={12}
            >


                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>Our Hosts</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}><Text style={styles.subtitle}>Home</Text></TouchableOpacity>
                </View>
            </ImageBackground>
            {
                hostImg.map((item,index) => (
                    <View key={item.id} style={{ width: responsiveWidth(100), alignItems: 'center', justifyContent: "center",position:"relative",borderRadius:10 }}>
                        <Image
                            source={item.img}
                            style={{ width: responsiveWidth(80), height: responsiveHeight(60), resizeMode: 'contain' }}
                        />
                        <View style={{ width: responsiveWidth(70),padding: Platform.OS === 'ios' ? 15 :10, backgroundColor: '#ffffff',borderRadius:10,shadowColor: 'rgba(0, 0, 0, 0.25)',position:"absolute",bottom: Platform.OS === 'ios' ? 43 : 23}}>
                         <View style={{borderRadius:10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' ,gap:5}}>
                            <Text style={{color:"#000080",fontWeight:700,fontSize:16}}>{item.first_name}</Text>
                            <Text style={{color:"#FDC801",fontWeight:700,fontSize:16}}>{item.second_name}</Text>  
           
                        </View>
                            <TouchableOpacity
                            onPress={() => openLink(item.url)} // Correct usage
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}  // Stretch to full width
                            >
                            <Text style={{textTransform:"uppercase",textDecorationLine:"underline",fontWeight:"600",color:"#0B0B0B",fontSize:14,marginTop:5}}>{item.sub_title}</Text>
                            </TouchableOpacity>
                        </View>
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

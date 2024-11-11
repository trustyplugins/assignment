import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
const About = ({ navigation }) => {
    const handleClick = () => {
        const url = 'https://m.youtube.com/@SpanglishWorldNetwork';
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={require("../../assets/about-bg.jpg")}
                style={styles.backgroundImage}
            >
                <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>About Us</Text>
                    <Text style={styles.subtitle}>Home</Text>
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

            {/* About Spanglish */}

            <View style={styles.aboutSection}>
                <Text style={styles.aboutTopTitle}>About Spanglish</Text>
                <Text style={styles.aboutTitle}>From entertainment and fun to education and growth</Text>
                <Text style={styles.aboutDes}>Spanglish World Networks Inc. is a conglomerate of multi-media companies that brings their audiences the most updated information through mediums like TV, Radio, Newspapers and Digital media. </Text>
                <View>
                </View>
            </View>

            {/* Why Choose Us */}

            <View
                style={{
                    paddingHorizontal: responsiveWidth(5),
                    paddingVertical: responsiveHeight(3),
                    backgroundColor: '#F5F5F5',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: responsiveFontSize(1.5),
                        color: '#000',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        marginBottom: responsiveHeight(1),
                    }}
                >
                    WHY CHOOSE US
                </Text>
                <Text
                    style={{
                        fontSize: responsiveFontSize(2.5),
                        color: '#000',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: responsiveHeight(1.5),
                    }}
                >
                    Why you must choose our content
                </Text>
                <Text
                    style={{
                        fontSize: responsiveFontSize(1.8),
                        color: '#333',
                        textAlign: 'center',
                        marginBottom: responsiveHeight(3),
                    }}
                >
                    Dive into a vibrant mosaic of articles, each a carefully crafted tapestry of words that inform, entertain, and spark curiosity. Whether you're a news hound hungry for the latest headlines or a culture connoisseur seeking the next binge-worthy masterpiece, our diverse array of content has you covered.
                </Text>

                {/* Card Section */}
                <View
                    style={{
                        width: responsiveWidth(90),
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        padding: responsiveWidth(5),
                        alignItems: 'center',
                        elevation: 5, // shadow for Android
                        shadowColor: '#000', // shadow for iOS
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 8,
                        marginTop: responsiveHeight(3),
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFD700', // yellow background for icon
                            borderRadius: 10,
                            padding: responsiveWidth(3),
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Icon name="comments" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Great Interviews
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Immerse yourself in thought-provoking dialogues that span a spectrum of topics—from innovation and leadership to personal growth and societal change.
                    </Text>
                    <TouchableOpacity
                        style={{
                            paddingVertical: responsiveHeight(1),
                            paddingHorizontal: responsiveWidth(5),
                            backgroundColor: '#FFD700', // yellow button background
                            borderRadius: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(1.8),
                                textAlign: 'center',
                            }}
                        >
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: responsiveWidth(90),
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        padding: responsiveWidth(5),
                        alignItems: 'center',
                        elevation: 5, // shadow for Android
                        shadowColor: '#000', // shadow for iOS
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 8,
                        marginTop: responsiveHeight(3),
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFD700', // yellow background for icon
                            borderRadius: 10,
                            padding: responsiveWidth(3),
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Icon name="futbol-o" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Latest Sports News
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Whether you're a weekend warrior or a fantasy league champion.  Gear up, get ready, and join us as we celebrate the triumphs, and analyze the strategies.
                    </Text>
                    <TouchableOpacity
                        style={{
                            paddingVertical: responsiveHeight(1),
                            paddingHorizontal: responsiveWidth(5),
                            backgroundColor: '#FFD700', // yellow button background
                            borderRadius: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(1.8),
                                textAlign: 'center',
                            }}
                        >
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: responsiveWidth(90),
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        padding: responsiveWidth(5),
                        alignItems: 'center',
                        elevation: 5, // shadow for Android
                        shadowColor: '#000', // shadow for iOS
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 8,
                        marginTop: responsiveHeight(3),
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFD700', // yellow background for icon
                            borderRadius: 10,
                            padding: responsiveWidth(3),
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Icon name="newspaper-o" size={40} color="#FFF" />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Articles of Interest and Lifestyle
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Discover wellness practices that nourish the body, mind, and soul, as we explore mindfulness, fitness trends, and holistic approaches to living a balanced life.
                    </Text>
                    <TouchableOpacity
                        style={{
                            paddingVertical: responsiveHeight(1),
                            paddingHorizontal: responsiveWidth(5),
                            backgroundColor: '#FFD700', // yellow button background
                            borderRadius: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: responsiveFontSize(1.8),
                                textAlign: 'center',
                            }}
                        >
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ImageBackground
                source={require("../../assets/bg-2.jpg")}
                style={styles.backgroundImage}
            >
                <View style={{ paddingVertical: responsiveHeight(7), paddingHorizontal: responsiveWidth(7) }}>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: "#ffb700", borderWidth: 1, borderColor: "gray", width: responsiveWidth(40), paddingHorizontal: 14, borderRadius: 20, justifyContent: "center", paddingVertical: 5 }}>Enjoy Spanglish</Text>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: "#fff", marginVertical: responsiveHeight(3), fontWeight: 'bold' }}>Unlock New Ideas And Perspectives</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.7), color: "#fff" }}>Dive into a vibrant mosaic of articles, each a carefully crafted tapestry of words that inform, entertain, and spark curiosity. Whether you’re a news hound hungry for the latest headlines or a culture connoisseur seeking the next binge-worthy masterpiece, our diverse array of content has you covered.</Text>
                    <TouchableOpacity style={{
                        backgroundColor: '#FFD700', paddingVertical: responsiveHeight(1.5), borderRadius: responsiveWidth(10), width: responsiveWidth(42), marginVertical: responsiveHeight(4)
                    }} onPress={handleClick}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: responsiveFontSize(2), textAlign: "center" }}>YouTube Channer</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <Footer navigation={navigation} />
        </ScrollView>
    );
};

export default About;

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
    aboutSection: {
        backgroundColor: '#FFFFFF',
        paddingVertical: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5),
    },
    aboutTopTitle: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'semibold',
        color: '#000',
        marginBottom: responsiveHeight(1.2),
        paddingLeft: responsiveWidth(4)
    },
    aboutTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: '#000',
        marginBottom: responsiveHeight(1.2),
    },
    aboutDes: {
        fontSize: responsiveFontSize(1.8),
        color: 'gray',
    },
});

import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView,Linking } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../../components/Header';
import Copyright from '../../components/Copyright';
const Rugby = ({ navigation }) => {
    const handleClick = () => {
        const url = 'https://m.youtube.com/@SpanglishWorldNetwork';
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />
            <ImageBackground
                source={require("../../../assets/rug-bg.webp")}
                style={styles.backgroundImage}
                blurRadius={10}
            >
                

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>Rugby</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Rugby")}><Text style={styles.subtitle}>Spanglish Sports world</Text></TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={{
                paddingHorizontal: responsiveWidth(5),
                paddingVertical: responsiveHeight(3),
                backgroundColor: '#F5F5F5',
                alignItems: 'center',
            }}>
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
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        <Image
                            source={require('../../../assets/rug-1.jpg')}
                            style={{
                                width: responsiveWidth(45),
                                height: responsiveHeight(15),
                                resizeMode: 'contain',
                                borderRadius: 10
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2),
                            fontWeight: 'bold',
                            color: '#000',
                            marginBottom: responsiveHeight(1),
                        }}
                    >
                        Celebrating Rugby Greats: World Rugby Pays Tribute to Legends of the Game
                    </Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(1.6),
                            color: '#333',
                            textAlign: 'center',
                            marginBottom: responsiveHeight(2),
                        }}
                    >
                        Rugby fans around the world marked a significant day as World Rugby celebrated the legends who have shaped the game. Teams and fans honored the extraordinary contributions of iconic players, reinforcing rugby’s spirit of respect, unity, and passion.
                    </Text>
                    <TouchableOpacity onPress={handleClick}
                        style={{
                            paddingVertical: responsiveHeight(1),
                            paddingHorizontal: responsiveWidth(8),
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
                            Youtube
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Copyright />
        </ScrollView>
    );
};

export default Rugby;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        justifyContent: 'space-between',
        paddingTop: responsiveHeight(22)
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

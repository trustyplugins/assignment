import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';
const Contact = ({ navigation }) => {
    const addressCoordinate = {
        latitude: 43.6418,
        longitude: -79.3762,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={require("../../assets/contact.jpg")}
                style={styles.backgroundImage}
            >
                <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>Contact Detail</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}><Text style={styles.subtitle}>Home</Text></TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.aboutSection}>
                <Text style={styles.aboutTitle}>Get in touch with us</Text>
                <Text style={styles.aboutDes}>Feel free to reach out to us through the following channels: </Text>
            </View>

            <View style={{ paddingVertical: responsiveHeight(2), paddingHorizontal: responsiveWidth(5), flexDirection: 'column', backgroundColor: "#fff" }}>
                <View style={{ marginTop: responsiveHeight(2), flexDirection: "row", gap: 20, alignItems: 'center' }}>
                    <Icon name="map-marker" size={40} color="#FFD700" />
                    <View>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "#000", fontWeight: "bold" }}>Address</Text>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "gray" }}>20 Bay Street, 11th Floor,{'\n'}Toronto, Ontario, M5J 2N8</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine} />
                <View style={{ marginTop: responsiveHeight(2), flexDirection: "row", gap: 20, alignItems: 'center' }}>
                    <Icon name="comment" size={40} color="#FFD700" />
                    <View>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "#000", fontWeight: "bold" }}>Email</Text>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "gray" }}>eharari@spanglishworld.ca</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine} />
                <View style={{ marginTop: responsiveHeight(2), flexDirection: "row", gap: 20, alignItems: 'center' }}>
                    <Icon name="phone" size={40} color="#FFD700" />
                    <View>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "#000", fontWeight: "bold" }}>Phone</Text>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "gray" }}>+1 (416) 654-2124</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine} />
                <View style={{ marginTop: responsiveHeight(2), flexDirection: "row", gap: 20, alignItems: 'center' }}>
                    <Icon name="clock-o" size={40} color="#FFD700" />
                    <View>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "#000", fontWeight: "bold" }}>Office Hours</Text>
                        <Text style={{ fontSize: responsiveFontSize(2), color: "gray" }}>Mon-Fri : 09am-07pm Sat-Sun : Closed</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine} />
            </View>

            <View style={{ padding: responsiveWidth(4), backgroundColor: '#FFF', flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Text style={{
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: 'bold',
                    color: '#000',
                    marginBottom: responsiveHeight(1)
                }}>
                    Let's Connect:
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    {/* Facebook Icon */}
                    <TouchableOpacity
                        style={{
                            width: responsiveWidth(10),
                            height: responsiveWidth(10),
                            borderWidth: 1,
                            borderColor: '#DDD',
                            borderRadius: responsiveWidth(2),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: responsiveWidth(1),
                        }}
                    >
                        <Icon name="facebook" size={responsiveFontSize(2.5)} color="#3b5998" />
                    </TouchableOpacity>

                    {/* LinkedIn Icon */}
                    <TouchableOpacity
                        style={{
                            width: responsiveWidth(10),
                            height: responsiveWidth(10),
                            borderWidth: 1,
                            borderColor: '#DDD',
                            borderRadius: responsiveWidth(2),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: responsiveWidth(1),
                        }}
                    >
                        <Icon name="linkedin" size={responsiveFontSize(2.5)} color="#0077B5" />
                    </TouchableOpacity>

                    {/* YouTube Icon */}
                    <TouchableOpacity
                        style={{
                            width: responsiveWidth(10),
                            height: responsiveWidth(10),
                            borderWidth: 1,
                            borderColor: '#DDD',
                            borderRadius: responsiveWidth(2),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: responsiveWidth(1),
                        }}
                    >
                        <Icon name="youtube" size={responsiveFontSize(2.5)} color="#FF0000" />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.contactContainer}>
                <Text style={styles.headerText}>Send us a message</Text>
                <Text style={styles.subHeaderText}>
                    Have a question about our content, services, or any other inquiries?
                </Text>

                <Text style={styles.labelText}>Your Name</Text>
                <TextInput style={styles.input} placeholder="Enter your name" />

                <Text style={styles.labelText}>Your Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />

                <Text style={styles.labelText}>Your Message (Optional)</Text>
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Enter your message"
                    multiline
                    numberOfLines={4}
                />

                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={addressCoordinate}
                    >
                        <Marker coordinate={addressCoordinate} title="Our Location" description="20 Bay Street, 11th Floor, Toronto, Ontario, M5J 2N8" />
                    </MapView>
                </View>
            </View>

            <Footer navigation={navigation} />
        </ScrollView>
    );
};

export default Contact;

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
    horizontalLine: {
        marginTop: responsiveHeight(2.2),
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
    },
    contactContainer: {
        padding: responsiveWidth(5),
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: responsiveHeight(1),
    },
    subHeaderText: {
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        color: '#666',
        marginBottom: responsiveHeight(2),
    },
    labelText: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(0.5),
    },
    input: {
        width: '100%',
        height: responsiveHeight(5),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: responsiveWidth(2),
        marginBottom: responsiveHeight(1.5),
        backgroundColor: '#f8f8f8',
    },
    messageInput: {
        height: responsiveHeight(15),
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#FFD700',
        paddingVertical: responsiveHeight(1.5),
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: responsiveHeight(2),
    },
    submitButtonText: {
        fontSize: responsiveFontSize(2),
        color: '#fff',
        fontWeight: 'bold',
    },
    mapContainer: {
        height: responsiveHeight(30),
        borderRadius: 10,
        overflow: 'hidden',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

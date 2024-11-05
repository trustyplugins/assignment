import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Logo and Description */}
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    {/* <Image source={require('../assets/spanglish_logo.png')} style={styles.logo} /> */}
                    <Text style={styles.description}>
                        Spanglish World Networks Inc. is a conglomerate of multi-media companies that brings their audiences the most updated information through mediums like TV, Radio, Newspapers and Digital media.
                    </Text>
                </View>

                {/* App Store Buttons */}
                <View style={styles.appButtonsContainer}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store')}>
                        <Image source={require('../../assets/g-play.png')} style={styles.appButton} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.apple.com/app-store/')}>
                        <Image source={require('../../assets/apple-store.png')} style={styles.appButton} />
                    </TouchableOpacity>
                </View>

                {/* Quick Links */}
                <View style={styles.quickLinksContainer}>
                    <Text style={styles.sectionTitle}>Quick Links</Text>
                    {['Home', 'About Us', 'H.E.R Network', 'Spanglish Sports Word', 'La Portada Canada', 'Zingo TV', 'Contact Us'].map((link, index) => (
                        <TouchableOpacity key={index}>
                            <Text style={styles.linkText}>{link}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* General Office */}
                <View style={styles.officeContainer}>
                    <Text style={styles.sectionTitle}>General Office</Text>
                    <View style={styles.sectionLocation}>
                        <Icon name="map-marker" size={20} color="#FFD700" />
                        <View>
                            <Text style={styles.officeText}>20 Bay Street, 11th Floor</Text>
                            <Text style={styles.officeText}>Toronto, Ontario, M5J 2N8</Text>
                            <Text style={styles.officeText}>Canada</Text>
                        </View>
                    </View>
                </View>

                {/* Office Hours */}
                <View style={styles.officeHoursContainer}>
                    <Text style={styles.sectionTitle}>Office Hours</Text>
                    <Text style={styles.officeText}>Mon-Fri : 09am-07pm</Text>
                    <Text style={styles.officeText}>Sat-Sun : Closed</Text>
                </View>

                {/* Get in Touch */}
                <View style={styles.contactContainer}>
                    <Text style={styles.sectionTitle}>Get In Touch</Text>
                    <View style={styles.contactItem}>
                        <Icon name="envelope" size={20} color="#FFD700" />
                        <Text style={styles.contactText}>info@spanglishsportsworld.com</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <Icon name="phone" size={20} color="#FFD700" />
                        <Text style={styles.contactText}>+1 (647) 865-9167</Text>
                    </View>
                </View>

                {/* Social Media Links */}
                <View style={styles.socialMediaContainer}>
                    {['facebook', 'instagram', 'youtube', 'linkedin'].map((iconName, index) => (
                        <TouchableOpacity key={index} style={styles.socialIcon}>
                            <Icon name={iconName} size={25} color="#FFF" />
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Footer Text */}
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerText}>Copyright © 2023 Spanglish Networks. All rights reserved.</Text>
                    <View style={styles.termsContainer}>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Terms of Use</Text>
                        </TouchableOpacity>
                        <Text style={styles.footerSeparator}>•</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: responsiveHeight(2),
    },
    logoContainer: {
        alignItems: 'left',
        marginBottom: responsiveHeight(2),
    },
    logo: {
        width: responsiveWidth(40),
        height: responsiveHeight(8),
        resizeMode: 'contain',
    },
    description: {
        color: '#fff',
        textAlign: 'left',
        marginVertical: responsiveHeight(1),
        fontSize: responsiveFontSize(1.8),
    },
    appButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'left',
        marginBottom: responsiveHeight(2),
    },
    appButton: {
        width: responsiveWidth(20),
        height: responsiveHeight(5),
        resizeMode: 'contain',
        marginHorizontal: responsiveWidth(2),
    },
    quickLinksContainer: {
        marginBottom: responsiveHeight(2),
    },
    sectionTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2),
        marginBottom: responsiveHeight(1),
    },
    sectionLocation: {
        flexDirection: 'row',
        gap: responsiveWidth(1)
    },
    linkText: {
        color: '#fff',
        fontSize: responsiveFontSize(1.8),
        marginVertical: responsiveHeight(0.5),
    },
    officeContainer: {
        marginBottom: responsiveHeight(2),
    },
    officeText: {
        color: '#fff',
        fontSize: responsiveFontSize(1.8),
    },
    officeHoursContainer: {
        marginBottom: responsiveHeight(2),
    },
    contactContainer: {
        marginBottom: responsiveHeight(2),
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: responsiveHeight(0.5),
    },
    contactText: {
        color: '#fff',
        fontSize: responsiveFontSize(1.8),
        marginLeft: responsiveWidth(2),
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: responsiveHeight(2),
    },
    socialIcon: {
        marginHorizontal: responsiveWidth(2),
    },
    footerTextContainer: {
        alignItems: 'center',
        marginVertical: responsiveHeight(2),
    },
    footerText: {
        color: '#fff',
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(1),
    },
    footerLink: {
        color: '#FFD700',
        fontSize: responsiveFontSize(1.6),
    },
    footerSeparator: {
        color: '#fff',
        marginHorizontal: responsiveWidth(1),
        fontSize: responsiveFontSize(1.6),
    },
});

export default Footer;

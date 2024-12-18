import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Animated, Text, Dimensions, Linking, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { useDispatch, useSelector } from "react-redux";
const screenHeight = Dimensions.get("window").height;
const Header = ({ navigation, back }) => {
    const dispatch = useDispatch();
    const [menuVisible, setMenuVisible] = useState(false);
    const translateX = useRef(new Animated.Value(-200)).current; // Initial position off-screen
    const userData = useSelector(state => state.user.user);

    const toggleMenu = () => {
        if (menuVisible) {
            // Close menu
            Animated.timing(translateX, {
                toValue: -200, // Move back off-screen
                duration: 300,
                useNativeDriver: true,
            }).start(() => setMenuVisible(false));
        } else {
            // Open menu
            setMenuVisible(true);
            Animated.timing(translateX, {
                toValue: 0, // Move to visible position
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleLogout = () => {
        dispatch({ type: "LOGIN", payload: null });
        navigation.navigate("Login")
    }

    const handSwitch = () => {
        const url = 'https://www.laportadacanada.com';
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftHeader}>

                    {/* {back && (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                            accessibilityLabel="Go back"
                            accessible={true}
                        >
                            <Icon name="arrow-left" size={20} color="#000" />
                        </TouchableOpacity>
                    )} */}


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        accessibilityLabel="Go to Home"
                        accessible={true}
                    >
                        <Image
                            source={require('../../assets/logo.png')}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
                        <Icon name="bars" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            {menuVisible && (
                <Pressable style={styles.overlay} onPress={toggleMenu}>
                    <Animated.View style={[styles.menu, { transform: [{ translateX }] }]}>
                        <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
                            <Icon name="times" size={30} color="#FFD700" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Home'); toggleMenu(); }}>
                            <Text style={styles.menuItem}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('About'); toggleMenu(); }}>
                            <Text style={styles.menuItem}>About Us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Host'); toggleMenu(); }}>
                            <Text style={styles.menuItem}>Our Hosts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Network'); toggleMenu(); }}>
                            <Text style={styles.menuItem}>H.E.R.Network</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Sports'); toggleMenu(); }}>
                            <Text style={styles.menuItem}>Spanglish Sports World</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleMenu(); handSwitch(); }}>
                            <Text style={styles.menuItem}>La Portada Canadá</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleMenu}>
                            <Text style={styles.menuItem}>Zingo Tv</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Contact'); toggleMenu(); }}>
                            <Text style={styles.menuItem}>Contact</Text>
                        </TouchableOpacity>
                        {userData && <TouchableOpacity onPress={() => { navigation.navigate('Profile'); toggleMenu(); }}>
                            <Text style={styles.menuItem}>Profile</Text>
                        </TouchableOpacity>}
                        {
                            userData ? <TouchableOpacity onPress={() => { toggleMenu(); handleLogout(); }}>
                                <Text style={styles.menuItem}>Logout</Text>
                            </TouchableOpacity> : <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate("Login") }}>
                                <Text style={styles.menuItem}>Login</Text>
                            </TouchableOpacity>
                        }

                    </Animated.View>
                </Pressable>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(1.25),
        marginTop: responsiveHeight(1),
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: responsiveWidth(25),
        height: responsiveHeight(5),
        resizeMode: 'contain',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    backButton: {
        marginRight: responsiveWidth(2),
        padding: responsiveWidth(2),
    },
    menu: {
        position: 'absolute',
        left: 0,
        top: 30,
        bottom: 0,
        width: responsiveWidth(70),
        backgroundColor: '#fff',
        paddingVertical: responsiveHeight(2),
        elevation: 5,
        zIndex: 1000,
        height: screenHeight
    },
    closeButton: {
        position: 'absolute',
        top: responsiveHeight(1),
        right: responsiveWidth(3),
        zIndex: 1001,
        padding: responsiveWidth(1.5),
    },
    menuButton: {
        padding: responsiveWidth(2.3),
        backgroundColor: '#FFD700',
        borderRadius: 6
    },
    menuItem: {
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(3),
        fontSize: 16,
        color: '#333',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: -(screenHeight),
        backgroundColor: 'transparent',
        zIndex: 999,
    },
});

export default Header;

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
    const [sports, setSports] = useState(false);
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
        setSports(false)
    };

    const handleLogout = () => {
        dispatch({ type: "LOGIN", payload: null });
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }

    const handSwitch = () => {
        const url = 'https://www.laportadacanada.com';
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerChild}>
                    <View style={styles.leftHeader}>
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
                        <TouchableOpacity onPress={() => toggleMenu()} style={styles.menuButton}>
                            <Icon name="bars" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {menuVisible && (
                <Pressable style={styles.overlay} onPress={toggleMenu}>
                    <Animated.View style={[styles.menu, { transform: [{ translateX }] }]}>
                        <TouchableOpacity onPress={() => toggleMenu()} style={styles.closeButton}>
                            <Icon name="times" size={30} color="#000" />
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
                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingRight: responsiveWidth(3) }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Sports'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Spanglish Sports World</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSports(prev => !prev) }}>
                                <Text style={{ borderWidth: 1, borderColor: "gray", padding: responsiveWidth(1.5), borderRadius: 8 }}> <Icon name="arrow-down" size={16} color="#000" /></Text>
                            </TouchableOpacity>
                        </View>
                        {sports && <View style={{ backgroundColor: "#F5F5F5" }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Baseball'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Baseball</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Basketball'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Basketball</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Football'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Football</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Soccer'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Soccer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Hockey'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Hockey</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Rugby'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Rugby</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Tennis'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Tennis</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => { navigation.navigate('Others'); toggleMenu(); }}>
                                <Text style={styles.menuItem}>Others</Text>
                            </TouchableOpacity> */}
                        </View>}
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
        position: "absolute",
        top: 0,
        zIndex: 999,
    },
    containerChild: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(1.25),
        marginTop: responsiveHeight(1),
        width: responsiveWidth(100)
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
        height: screenHeight,
        zIndex: 999
    },
    closeButton: {
        position: 'absolute',
        top: responsiveHeight(1),
        right: responsiveWidth(3),
        zIndex: 1001,
        padding: responsiveWidth(3.5),
        backgroundColor: "#FFD700",
        borderRadius: 10
    },
    menuButton: {
        padding: responsiveWidth(2.3),
        backgroundColor: '#FFD700',
        borderRadius: 6,
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
        zIndex: 10
    },
});

export default Header;

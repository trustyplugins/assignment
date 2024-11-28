import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import Header from '../components/Header';
import Copyright from '../components/Copyright';
import { useSelector } from "react-redux";

const Profile = ({ navigation }) => {
    const userData = useSelector(state => state.user.user);

    if (!userData) {
        return <Text>Loading...</Text>; // Loading state
    }

    const TabData = [
        { id: '1', title: 'Username', details: userData?.username || "N/A" },
        { id: '2', title: 'Email', details: userData?.email || "N/A" },
        { id: '3', title: 'Phone', details: "+91- " + userData?.phone || "N/A" },
    ];

    const [expandedId, setExpandedId] = useState(null);
    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    const renderItem = ({ item }) => {
        const isExpanded = expandedId === item.id; // Check if this item is expanded
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity
                    style={styles.itemHeader}
                    onPress={() => toggleExpand(item.id)}
                >
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Icon
                        name={isExpanded ? 'chevron-down-outline' : 'chevron-forward-outline'}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
                {isExpanded && (
                    <View style={styles.itemDetails}>
                        <Text style={styles.detailsText}>{item.details}</Text>
                    </View>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Background image */}
            <ImageBackground
                source={require("../../assets/about-bg.jpg")}
                style={styles.backgroundImage}
                blurRadius={9}
            >
                <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} />
                <View style={styles.ImgContainer}>
                    <Image
                        source={require("../../assets/user-icon.png")}
                        style={styles.ProfileImage}
                    />
                    <Text style={styles.title}>{userData?.username}</Text>
                </View>
            </ImageBackground>

            {/* List container with extended height */}
            <View style={styles.listContainer}>
                <FlatList
                    data={TabData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
                <Copyright />
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    backgroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(Platform.OS === 'ios' ? 40 :50), // Reduced height for the image background
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProfileImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    title: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: responsiveHeight(2),
    },
    listContainer: {
        flex: 1, // Takes remaining space
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: responsiveHeight(8), // Leaves space for footer
    },
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    itemDetails: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    detailsText: {
        fontSize: 14,
        color: '#555',
    },
    separator: {
        height: 10,
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
    },
});

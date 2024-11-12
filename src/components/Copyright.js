import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';



const Copyright = () => {


    return (
        <ScrollView>
            <View style={styles.container}>
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

export default Copyright;

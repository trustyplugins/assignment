import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { API_BASE_URL } from "@env";

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Invalid phone number')
        .required('Required'),
    password: Yup.string()
        .min(3, 'Password is too short')
        .required('Required'),
});

export default function Signup({ navigation }) {
    const [apiError, setApiError] = useState(null);
    const handleSignup = async (values) => {
        console.log(values, API_BASE_URL)
        try {
            const response = await axios.post(`${API_BASE_URL}/signup`, values, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            navigation.navigate("Login")

        } catch (error) {
            if (error.response && error.response.data) {
                setApiError(error.response.data.message);
            } else {
                setApiError("An unexpected error occurred");
            }
        }
    }
    const resetError = () => {
        setApiError(null)
    };
    return (
        <>
            <ImageBackground
                source={require("../../assets/media-event.jpg")}
                style={styles.backgroundImage}
            >
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                />


                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>Sign Up</Text>
                </View>
            </ImageBackground>
            <Formik
                initialValues={{ username: '', email: '', phone: '', password: '' }}
                validationSchema={SignupSchema}
                onSubmit={handleSignup}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.container}>
                        {/* <Text style={styles.title}>Signup</Text> */}
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            onFocus={resetError}
                        />
                        {touched.username && errors.username && <Text style={styles.error}>{errors.username}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            onFocus={resetError}
                        />
                        {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            keyboardType="phone-pad"
                            onFocus={resetError}
                        />
                        {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                            onFocus={resetError}
                        />
                        {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                        {apiError && <Text style={styles.error}>{apiError}</Text>}

                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.switchText}>Already have an account? Log in</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: responsiveWidth(5),
        justifyContent: "center",
    },
    backgroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(35),
        justifyContent: 'space-between',
        padding: responsiveWidth(2),
    },
    logo: {
        width: responsiveWidth(35),
        height: responsiveHeight(8),
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
    input: {
        height: responsiveHeight(6),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(3),
    },
    error: {
        fontSize: responsiveFontSize(1.5),
        color: 'red',
        marginBottom: responsiveHeight(1),
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: responsiveHeight(1.8),
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    switchText: {
        marginTop: responsiveHeight(2),
        color: 'gray',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
    },
});

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { API_BASE_URL } from "@env";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from "react-redux";
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});
import Header from '../components/Header';

export default function Login({ navigation }) {
  const [apiError, setApiError] = useState(null);
  const dispatch = useDispatch();
  const handleLogin = async (values) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      dispatch({ type: "LOGIN", payload: response.data.data });
      navigation.navigate("Home")

    } catch (error) {
      if (error.response && error.response.data) {
        // Display error message from API response
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
        {/* <Header navigation={navigation} back={navigation.canGoBack() ? {} : null} /> */}
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        {/* Text Content */}
        <View style={styles.textContent}>
          <Text style={styles.title}>Login</Text>
        </View>
      </ImageBackground>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
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
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.switchText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(5),
    // flex: 1,
    justifyContent: "center"
  },
  backgroundImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(45),
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

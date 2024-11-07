import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../screens/Home';
import About from '../screens/About';
import Host from '../screens/Host';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
const Stack = createNativeStackNavigator();
const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        surface: '#fff',
    },
};
const AppNavigator = () => {
    return (
        <PaperProvider theme={customTheme}>
            <SafeAreaView style={styles.container}>
                <Stack.Navigator>
                    {/* <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    /> */}
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="About"
                        component={About}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Host"
                        component={Host}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </SafeAreaView>
        </PaperProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppNavigator
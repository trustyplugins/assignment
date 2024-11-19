import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../screens/Home';
import About from '../screens/About';
import Host from '../screens/Host';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Network from '../screens/Network';
import Contact from '../screens/Contact';
import Sports from '../screens/Sports';
import Baseball from '../screens/sports/Baseball';
import Basketball from '../screens/sports/Basketball';
import Football from '../screens/sports/Football';
import Hockey from '../screens/sports/Hockey';
import Rugby from '../screens/sports/Rugby';
import Soccer from '../screens/sports/Soccer';
import Tennis from '../screens/sports/Tennis';
import LandingPage from '../screens/LandingPage';
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
                    <Stack.Screen
                        name="Landing"
                        component={LandingPage}
                        options={{ headerShown: false }}
                    />
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
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Sports"
                        component={Sports}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Baseball"
                        component={Baseball}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Basketball"
                        component={Basketball}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Football"
                        component={Football}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Hockey"
                        component={Hockey}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Rugby"
                        component={Rugby}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Soccer"
                        component={Soccer}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Tennis"
                        component={Tennis}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Network"
                        component={Network}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Contact"
                        component={Contact}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
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
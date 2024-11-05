import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import About from '../screens/About';
import Footer from '../screens/Footer';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
const Stack = createNativeStackNavigator();
const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        surface: '#fff', // Ensures the background is white
    },
};
const AppNavigator = () => {
    return (
        <PaperProvider theme={customTheme}>
            <View style={styles.container}>
                <Stack.Navigator>
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
                </Stack.Navigator>
            </View>
        </PaperProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppNavigator
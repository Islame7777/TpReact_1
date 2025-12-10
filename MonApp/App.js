import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Import des écrans et de l'AppBar personnalisée
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AppBar from './screens/AppBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- Navigation par pile (HomeStack) ---
function HomeStack() {
    return (
        // On cache le header du Stack Navigator (on utilise l'AppBar)
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

// --- Navigation principale par onglets (TabNavigator) ---
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, 
                // Palette de couleurs pour la navigation par onglets
                tabBarActiveTintColor: '#1E3A8A', // Bleu Foncé pour l'onglet actif
                tabBarInactiveTintColor: '#9CA3AF', // Gris pour l'onglet inactif
                tabBarStyle: { 
                    backgroundColor: '#FFFFFF', // Fond Blanc
                    borderTopColor: '#F8E9EB', // Bordure Rose Pâle
                    height: 65,
                },
                tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
            }}
        >
            <Tab.Screen 
                name="Maison" 
                component={HomeStack} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="Paramètres" 
                component={SettingsScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }} 
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                {/* La barre d'application fixe au sommet */}
                <AppBar />
                
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
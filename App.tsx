import React from "react";
import firebase from "firebase";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { initialiseApp } from "./FirebaseConfig";
import Login from "./Screens/Login";
import useAuth from "./Hooks/useAuth";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import Forgot from "./Screens/Forgot";
import { RootStackParamList } from "./Constants/RouteParams";
import AuthNavigation from "./Navigation/AuthNavigation";

const Stack = createStackNavigator<RootStackParamList>();

initialiseApp();

export default function App() {
	const [user, loading] = useAuth();

	if (loading) {
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{user ? (
					<Stack.Screen name='Home' component={Home} />
				) : (
					<Stack.Screen name='Auth' component={AuthNavigation} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

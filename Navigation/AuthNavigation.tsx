import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";
import { AuthStackParamList } from "../Constants/RouteParams";
import Forgot from "../Screens/Forgot";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitle: "",
				headerTransparent: true,
				headerBackTitleVisible: false,
				headerBackImage: () => (
					<Ionicons
						name='chevron-back'
						style={{ paddingLeft: 20 }}
						size={32}
						color='#fff'
					/>
				),
			}}>
			<Stack.Screen name='Register' component={Register} />
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Forgot' component={Forgot} />
		</Stack.Navigator>
	);
}

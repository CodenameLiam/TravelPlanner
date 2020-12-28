import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AuthStackParamList } from "../Constants/RouteParams";
import Forgot from "../Screens/Forgot";
import Login from "../Screens/Login";
import Register from "../Screens/Register";

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Forgot' component={Forgot} />
		</Stack.Navigator>
	);
}

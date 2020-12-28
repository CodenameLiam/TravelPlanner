import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { logout } from "../Services/LoginService";

interface IHomeProps {}

export default function Home(props: IHomeProps) {
	const handleError = (e: any) => {
		console.log(e);
	};

	const handleSuccess = () => {
		console.log("I'm out");
	};

	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button title='Logout' onPress={() => logout(handleSuccess, handleError)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#aed",
		alignItems: "center",
		justifyContent: "center",
	},
});

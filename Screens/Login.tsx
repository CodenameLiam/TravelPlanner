import { StackNavigationProp } from "@react-navigation/stack";
import React, { RefObject, useRef, useState } from "react";
import {
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { LoginNavProps } from "../Constants/RouteParams";
import { login } from "../Services/LoginService";

interface ILoginProps {
	navigation: LoginNavProps;
}

export default function Login(props: ILoginProps) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const emailRef: RefObject<any> = useRef(null);

	const handleError = (e: any) => {
		console.log(e);
	};

	const handleSuccess = () => {
		console.log("I'm in");
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}>
			<View>
				<Text>Login</Text>
			</View>
			<View>
				<TextInput
					placeholder='Name'
					// autoCorrect={false}
					returnKeyType='next'
					style={styles.input}
					value={name}
					onChangeText={(text) => setName(text)}
					// blurOnSubmit={false}
					onSubmitEditing={() => emailRef.current.focus()}
				/>
			</View>
			<View>
				<TextInput
					placeholder='Email'
					autoCorrect={false}
					returnKeyType='next'
					ref={emailRef}
					style={styles.input}
					value={email}
					onChangeText={(text) => setEmail(text)}
					// blurOnSubmit={false}
					// onSubmitEditing={() => passwordRef.current.focus()}
				/>
			</View>
			<Button
				title='Login'
				onPress={() =>
					login("liampercy123@gmail.com", "GoogleBUDDY123!", handleSuccess, handleError)
				}
			/>
			<Button title='Forgot password?' onPress={() => props.navigation.navigate("Forgot")} />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#aed",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		backgroundColor: "#ffffff",
		width: "100%",
		marginBottom: 10,
		borderRadius: 100,
		height: 45,
		borderWidth: 1,
		borderColor: "#d5d5d5",
		fontSize: 18,
		color: "gray",
		paddingLeft: 20,
		paddingRight: 20,
	},
});

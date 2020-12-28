import { LinearGradient } from "expo-linear-gradient";
import React, { RefObject, useRef, useState } from "react";
import { View, Text, Button, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { RegisterNavProps } from "../Constants/RouteParams";

interface IRegisterProps {
	navigation: RegisterNavProps;
}

export default function Register(props: IRegisterProps) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleNameChange = (text: string) => {
		setName(text);
	};

	const handleEmailChange = (text: string) => {
		setEmail(text);
	};

	const emailRef: RefObject<any> = useRef(null);
	const passwordRef: RefObject<any> = useRef(null);

	return (
		<ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.inner}>
				{/* <View style={styles.inner}> */}
				<LinearGradient
					colors={["#3590f9", "#0eaaff", "#58c8ff"]}
					style={styles.background}
					start={[0, 0]}
					end={[1, 1]}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.h1}>Welcome!</Text>
				</View>

				<TextInput
					placeholder='Name'
					// autoCorrect={false}
					returnKeyType='next'
					style={styles.input}
					value={name}
					onChangeText={handleNameChange}
					// blurOnSubmit={false}
					onSubmitEditing={() => emailRef.current.focus()}
				/>
				<TextInput
					textContentType='none'
					autoCompleteType='off'
					placeholder='Email'
					returnKeyType='next'
					ref={emailRef}
					style={styles.input}
					value={email}
					onChangeText={handleEmailChange}
					// blurOnSubmit={false}
					onSubmitEditing={() => passwordRef.current.focus()}
				/>
				<TextInput
					textContentType='none'
					placeholder='Password'
					autoCompleteType='off'
					secureTextEntry={true}
					ref={passwordRef}
					style={styles.input}
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<Button
					title='Already have an account?'
					color='#fff'
					onPress={() => props.navigation.navigate("Login")}
				/>
				{/* </View> */}
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	inner: {
		flex: 1,
		padding: 20,
		// backgroundColor: "#0eaaff",
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
		// fontSize: 18,
		color: "gray",
		paddingLeft: 20,
		paddingRight: 20,
	},
	textContainer: {
		width: "60%",
		alignItems: "center",
	},
	h1: {
		color: "#fff",
		marginBottom: 10,
		fontSize: 30,
		fontWeight: "bold",
	},
	text: {
		color: "#fff",
		marginBottom: 40,
		textAlign: "center",
		fontSize: 16,
	},
});

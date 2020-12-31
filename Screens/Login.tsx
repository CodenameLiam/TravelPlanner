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
import AuthBackground from "../Components/AuthBackground";
import { LoginNavProps } from "../Constants/RouteParams";
import { login } from "../Services/LoginService";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ILoginProps {
	navigation: LoginNavProps;
}

export default function Login(props: ILoginProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const passwordRef: RefObject<any> = useRef(null);

	const handleError = (e: any) => {
		console.log(e);
	};

	const handleSuccess = () => {
		console.log("I'm in");
	};

	return (
		<AuthBackground>
			{/* <View> */}
			<TextInput
				placeholder='Email'
				autoCorrect={false}
				returnKeyType='next'
				style={styles.input}
				value={email}
				onChangeText={(text) => setEmail(text)}
				onSubmitEditing={() => {
					passwordRef.current.focus();
				}}
				blurOnSubmit={false}
			/>

			<TextInput
				placeholder='Password'
				autoCompleteType='off'
				autoCorrect={false}
				secureTextEntry={true}
				ref={passwordRef}
				style={styles.input}
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			{/* </View> */}
		</AuthBackground>
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

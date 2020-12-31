import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface IAuthBackgroundProps {
	children?: any;
}

export default function AuthBackground(props: IAuthBackgroundProps) {
	return (
		<LinearGradient
			colors={["#3590f9", "#0eaaff", "#58c8ff"]}
			style={styles.background}
			start={[1, 0]}
			end={[0, 1]}>
			<ScrollView contentContainerStyle={styles.content}>{props.children}</ScrollView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	content: {
		flex: 1,
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
	},
});

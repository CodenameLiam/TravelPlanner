import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
	App: undefined;
	Auth: undefined;

	Home: undefined;
	Login: undefined;
	Register: undefined;
	Forgot: undefined;
};

export type AppStackParamList = {
	Home: undefined;
	Add: undefined;
	Profile: undefined;
}

export type AuthStackParamList = {
	Login: undefined;
	Register: undefined;
	Forgot: undefined;
	Home: undefined;
};

export type LoginNavProps = StackNavigationProp<AuthStackParamList, "Login">;
export type RegisterNavProps = StackNavigationProp<AuthStackParamList, "Register">;

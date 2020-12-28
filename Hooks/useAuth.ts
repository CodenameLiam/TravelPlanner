import { useEffect, useState } from "react";
import firebase from "firebase";

export const useAuth = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<firebase.User | null>(null);

	useEffect(() => {
		const authListener = firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
			setLoading(false);
		});
		return authListener;
	}, []);

	return [user, loading];
};

export default useAuth;

import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";

import { Link } from "react-router-native";
import { ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

import useSignOut from "../hooks/useSignOut";

import theme from "../theme";
// import useSignOut from "../hooks/useSignOut";
import Text from "./Text";

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBarBackgroundColor,
		display: "flex",
	},
	button: {
		grow: 0,
		padding: 10,
		paddingHorizontal: 20,
	},
	text: {
		color: "white",
	},
	link: {
		padding: 10,
	},
});

const AppBar = () => {
	const meQuery = useQuery(GET_ME);
	const isSignedIn = meQuery.data.me !== null;

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab text="Repositories" link="/" />
				{isSignedIn ? (
					<SignOutTab />
				) : (
					<AppBarTab text="Sign In" link="SignIn" />
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;

const SignOutTab = () => {
	const signOut = useSignOut();
	return (
		<>
			<Pressable style={styles.link} onPress={() => signOut()}>
				<Text style={styles.text}>Sign Out</Text>
			</Pressable>
		</>
	);
};

const AppBarTab = (props) => {
	return (
		<Link to={props.link} style={styles.link}>
			<Text style={styles.text}>{props.text}</Text>
		</Link>
	);
};

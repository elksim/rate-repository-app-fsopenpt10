import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";

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
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab text="Repositories" link="/" />
				<AppBarTab text="Sign In" link="SignIn" />
			</ScrollView>
		</View>
	);
};

export default AppBar;

const AppBarTab = (props) => {
	return (
		<Link to={props.link} style={styles.link}>
			<Text style={styles.text}>{props.text}</Text>
		</Link>
	);
};

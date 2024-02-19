import { FlatList, View, StyleSheet } from "react-native";

import Text from "./Text";
import Avatar from "./Avatar";

import theme from "../theme";

const repositories = [
	{
		id: "jaredpalmer.formik",
		fullName: "jaredpalmer/formik",
		description: "Build forms in React, without the tears",
		language: "TypeScript",
		forksCount: 1589,
		stargazersCount: 21553,
		ratingAverage: 88,
		reviewCount: 4,
		ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
	},
	{
		id: "rails.rails",
		fullName: "rails/rails",
		description: "Ruby on Rails",
		language: "Ruby",
		forksCount: 18349,
		stargazersCount: 45377,
		ratingAverage: 100,
		reviewCount: 2,
		ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
	},
	{
		id: "django.django",
		fullName: "django/django",
		description: "The Web framework for perfectionists with deadlines.",
		language: "Python",
		forksCount: 21015,
		stargazersCount: 48496,
		ratingAverage: 73,
		reviewCount: 5,
		ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
	},
	{
		id: "reduxjs.redux",
		fullName: "reduxjs/redux",
		description: "Predictable state container for JavaScript apps",
		language: "TypeScript",
		forksCount: 13902,
		stargazersCount: 52869,
		ratingAverage: 0,
		reviewCount: 0,
		ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
	},
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	return (
		<>
			<FlatList
				data={repositories}
				renderItem={({ item }) => RepositoryItem(item)}
				ItemSeparatorComponent={ItemSeparator}
				keyExtractor={(item) => item.id}
			/>
		</>
	);
};
console.log("xd");

export default RepositoryList;

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "white",
		padding: 10,
		justifyContent: "space-around",
		minHeight: 176,
	},
	container2: {
		display: "flex",
		paddingLeft: 15,
		justifyContent: "flex-start",
		height: 76,
	},
	container3: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	item3: {
		display: "flex",
	},
	languageTag: {
		backgroundColor: theme.colors.buttonBackground,
		color: "white",
		borderRadius: 3,
		padding: 3,
	},
});

const RepositoryItem = (item) => {
	return (
		<>
			<View style={styles.container}>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Avatar source={{ uri: item.ownerAvatarUrl }} />
					<View style={styles.container2}>
						<Text fontWeight="bold">{item.fullName}</Text>
						<Text>{item.description}</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.languageTag}>{item.language}</Text>
						</View>
					</View>
				</View>
				<View style={styles.container3}>
					<View style={styles.item3}>
						<Text fontWeight="bold">{formatCount(item.stargazersCount)}</Text>
						<Text>Stars</Text>
					</View>
					<View style={styles.item3}>
						<Text fontWeight="bold">{formatCount(item.forksCount)}</Text>
						<Text>Forks</Text>
					</View>
					<View style={styles.item3}>
						<Text fontWeight="bold">{formatCount(item.reviewCount)}</Text>
						<Text>Reviews</Text>
					</View>
					<View style={styles.item3}>
						<Text fontWeight="bold">{item.ratingAverage}</Text>
						<Text>Rating</Text>
					</View>
				</View>
			</View>
		</>
	);
};

const formatCount = (count) => {
	if (count < 1000) {
		return count.toString();
	} else {
		return (count / 1000).toFixed(1).toString() + "K";
	}
};

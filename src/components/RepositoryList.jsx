import { FlatList, View, StyleSheet } from "react-native";

import Text from "./Text";
import Avatar from "./Avatar";

import theme from "../theme";
import useRepositories from "../hooks/useRepositories";

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const { repositories } = useRepositories();

	const repositoryNodes = repositories
		? repositories.repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<>
			<FlatList
				data={repositoryNodes}
				renderItem={({ item }) => RepositoryItem(item)}
				ItemSeparatorComponent={ItemSeparator}
				keyExtractor={(item) => item.id}
			/>
		</>
	);
};

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

import { StyleSheet, Image } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
	avatar: {
		width: theme.avatarSize.small,
		height: theme.avatarSize.small,
		borderRadius: 3,
	},
	large: {
		width: theme.avatarSize.large,
		height: theme.avatarSize.large,
		borderRadius: 5,
	},
});

const Avatar = ({ size, ...props }) => {
	const imageStyle = [styles.avatar, size == "large" && styles.smallSize];
	return <Image style={imageStyle} {...props} />;
};

export default Avatar;

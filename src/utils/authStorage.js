import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
	constructor(namespace = "auth") {
		this.namespace = namespace;
	}

	async getAccessToken() {
		const accessToken = await AsyncStorage.getItem(
			`${this.namespace}:accessToken`
		);
		return accessToken;
	}

	async setAccessToken(accessToken) {
		await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
	}

	async removeAccessToken() {
		const accessTokenBefore = await AsyncStorage.getItem(
			`${this.namespace}:accessToken`
		);
		console.log("accessTokenBefore: ", accessTokenBefore);
		await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
		const accessTokenAfter = await AsyncStorage.getItem(
			`${this.namespace}:accessToken`
		);
		console.log("accessTokenAfter: ", accessTokenAfter);
	}
}

export default AuthStorage;

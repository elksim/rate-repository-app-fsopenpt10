import Main from "./src/components/Main";
import { ApolloProvider } from "@apollo/client";
import Constants from "expo-constants";

import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const App = () => {
	console.log("extra ", Constants.expoConfig.extra.env);

	return (
		<>
			<NativeRouter>
				<ApolloProvider client={apolloClient}>
					<AuthStorageContext.Provider value={authStorage}>
						<Main />
					</AuthStorageContext.Provider>
				</ApolloProvider>
			</NativeRouter>
			<StatusBar style="auto" />
		</>
	);
};

export default App;

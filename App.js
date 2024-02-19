import Main from "./src/components/Main";
import { ApolloProvider } from "@apollo/client";
import Constants from "expo-constants";

import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

import createApolloClient from "./src/utils/apolloClient";

const apolloClient = createApolloClient();

const App = () => {
	console.log("extra ", Constants.expoConfig.extra.env);

	return (
		<>
			<NativeRouter>
				<ApolloProvider client={apolloClient}>
					<Main />
				</ApolloProvider>
			</NativeRouter>
			<StatusBar style="auto" />
		</>
	);
};

export default App;

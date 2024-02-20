import useAuthContext from "./useAuthContext";
import { useApolloClient } from "@apollo/client";

const useSignOut = () => {
	const apolloClient = useApolloClient();
	const authStorage = useAuthContext();

	const signOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};
	return signOut;
};

export default useSignOut;

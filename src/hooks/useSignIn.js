import { useMutation, useApolloClient, gql } from "@apollo/client";
import useAuthContext from "./useAuthContext";

const SIGN_IN = gql`
	mutation ($username: String!, $password: String!) {
		authenticate(credentials: { username: $username, password: $password }) {
			accessToken
		}
	}
`;

const useSignIn = () => {
	const [mutate, result] = useMutation(SIGN_IN);
	const apolloClient = useApolloClient();
	const authStorage = useAuthContext();

	const signIn = async ({ username, password }) => {
		const { data } = await mutate({ variables: { username, password } });
		await authStorage.setAccessToken(data.authenticate.accessToken);
		apolloClient.resetStore();
		return { data };
	};

	return [signIn, result];
};

export default useSignIn;

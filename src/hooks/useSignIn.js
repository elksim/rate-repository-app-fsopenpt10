import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
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
	const authStorage = useAuthContext();

	const signIn = async ({ username, password }) => {
		return mutate({ variables: { username, password } });
	};

	return [signIn, result];
};

export default useSignIn;

import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
	const {
		data: repositories,
		loading,
		// error,
	} = useQuery(GET_REPOSITORIES, { fetchPolicy: "cache-and-network" });
	return { repositories, loading };
};

export default useRepositories;

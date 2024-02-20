import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
	query {
		repositories {
			edges {
				node {
					id
					ownerAvatarUrl
					fullName
					description
					language
					reviewCount
					stargazersCount
					forksCount
					ratingAverage
				}
			}
		}
	}
`;

export const GET_ME = gql`
	{
		me {
			id
			username
		}
	}
`;

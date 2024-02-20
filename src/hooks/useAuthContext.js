import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useAuthContext = () => {
	const authStorage = useContextxt(AuthStorageContextext);
	return authStorage;
};

export default useAuthContext;

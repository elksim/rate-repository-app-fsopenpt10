import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useAuthContext = () => {
	const authStorage = useContext(AuthStorageContext);
	return authStorage;
};

export default useAuthContext;

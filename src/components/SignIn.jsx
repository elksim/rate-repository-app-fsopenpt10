import { Text, View, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";

import theme from "../theme";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
	username: "",
	password: "",
};

const styles = StyleSheet.create({
	form: {
		display: "flex",
		flexDirection: "column",
		padding: 12,
		justifyContent: "flex-start",
		height: 500,
		alignContent: "flex-start",
	},
	input: {
		borderWidth: 1,
		borderRadius: 3,
		margin: 10,
		padding: 10,
		borderColor: "black",
	},
	button: {
		backgroundColor: theme.colors.buttonBackground,
		color: "white",
		margin: 10,
		borderRadius: 3,
		padding: 10,
	},
	buttonText: {
		color: "white",
		alignSelf: "center",
	},
});

const validationScheme = yup.object().shape({
	username: yup.string().required(),
	password: yup.string().required(),
});

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.form}>
			<FormikTextInput
				name="username"
				placeholder="username"
				style={styles.input}
			/>
			<FormikTextInput
				name="password"
				placeholder="password"
				// secureTextEntry={true}
				style={styles.input}
			/>
			<Pressable onPress={onSubmit} style={styles.button}>
				<Text style={styles.buttonText}>Sign In</Text>
			</Pressable>
		</View>
	);
};

const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });
			console.log("data: ", data.authenticate.accessToken);
			navigate("/");
		} catch (e) {
			console.log("error: ", e);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationScheme}
		>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;

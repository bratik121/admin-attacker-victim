import { input } from "../../../types";
import { isEmail, isText } from "../../../utils";
import Login from "./Login";

const LoginController = () => {
	const validateLogin = (emailInput: input, passwordInput: input): boolean => {
		let valid = true;
		if (isEmail(emailInput.value)) {
			emailInput.onError(isEmail(emailInput.value));
			valid = false;
		}

		if (isText(passwordInput.value) !== "") {
			passwordInput.onError(isText(passwordInput.value, "una contraseña"));
			valid = false;
		}

		return valid;
	};

	const handleLogin = (emailInput: input, passwordInput: input) => {
		if (validateLogin(emailInput, passwordInput)) {
			// handleSubmit;
			emailInput.reset();
			passwordInput.reset();
		}
	};
	return <Login handleLogin={handleLogin} />;
};

export default LoginController;

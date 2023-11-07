import {
	isCedula,
	isEmail,
	isName,
	isPassword,
	isRepeatPassword,
} from "../../../utils";
import { input } from "../../../types";
import { useDispatch } from "react-redux";
import { setAdmin, setAuth } from "../../../redux/features";
import RegisterForm from "./RegisterForm";

const RegisterController = () => {
	const dispatch = useDispatch();

	const validateRegister = (
		nombreInput: input,
		apellidoInput: input,
		emailInput: input,
		passwordInput: input,
		passwordConfirmInput: input,
		cedulaInput: input
	) => {
		let valid = true;

		if (isName(nombreInput.value, "nombre")) {
			nombreInput.onError(isName(nombreInput.value, "nombre"));
			valid = false;
		}

		if (isName(apellidoInput.value, "apellido")) {
			apellidoInput.onError(isName(apellidoInput.value, "apellido"));
			valid = false;
		}

		if (isEmail(emailInput.value)) {
			emailInput.onError(isEmail(emailInput.value));
			valid = false;
		}

		if (isPassword(passwordInput.value)) {
			passwordInput.onError(isPassword(passwordInput.value));
			valid = false;
		}

		if (isCedula(cedulaInput.value)) {
			cedulaInput.onError(isCedula(cedulaInput.value));
			valid = false;
		}

		if (isRepeatPassword(passwordInput.value, passwordConfirmInput.value)) {
			passwordConfirmInput.onError(
				isRepeatPassword(passwordInput.value, passwordConfirmInput.value)
			);
			valid = false;
		}

		return valid;
	};

	const resetInputs = (
		nombreInput: input,
		apellidoInput: input,
		cedulaInput: input,
		emailInput: input,
		passwordInput: input,
		passwordConfirmInput: input
	) => {
		nombreInput.reset();
		apellidoInput.reset();
		cedulaInput.reset();
		emailInput.reset();
		passwordInput.reset();
		passwordConfirmInput.reset();
	};

	const register = (
		nombreInput: input,
		apellidoInput: input,
		emailInput: input,
		passwordInput: input,
		passwordConfirmInput: input,
		cedulaInput: input
	) => {
		if (
			validateRegister(
				nombreInput,
				apellidoInput,
				emailInput,
				passwordInput,
				passwordConfirmInput,
				cedulaInput
			)
		) {
			dispatch(setAuth({ isLoged: true }));
			dispatch(
				setAdmin({
					nombre: nombreInput.value,
					apellido: apellidoInput.value,
					email: emailInput.value,
					password: passwordInput.value,
					cedula: cedulaInput.value,
				})
			);
			resetInputs(
				nombreInput,
				apellidoInput,
				emailInput,
				passwordInput,
				passwordConfirmInput,
				cedulaInput
			);
		}
	};

	return <RegisterForm register={register} />;
};

export default RegisterController;

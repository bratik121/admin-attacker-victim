import {
	isCedula,
	isEmail,
	isName,
	isPassword,
	isRepeatPassword,
	isNumber,
} from "../../utils";
import { input } from "../../types";
import SentenceForm from "./SentenceForm";

const SentenceController = () => {


	const validateSentence = (
		nombreVicInput: input,
		apellidoVicInput: input,
		emailVicInput: input,
		passwordVicInput: input,
		passwordConfirVicmInput: input,
		cedulaVicInput: input,
		nombreAtacInput: input,
		apellidoAtacInput: input,
		emailAtacInput:input,
		passwordAtacInput: input,
		passwordConfirAtacmInput: input,
		cedulaAtacInput: input,
		distancia:input
	) => {
		let valid = true;

		if (isName(nombreVicInput.value, "nombre")) {
			nombreVicInput.onError(isName(nombreVicInput.value, "nombre"));
			valid = false;
		}

		if (isName(apellidoVicInput.value, "apellido")) {
			apellidoVicInput.onError(isName(apellidoVicInput.value, "apellido"));
			valid = false;
		}

		if (isEmail(emailVicInput.value)) {
			emailVicInput.onError(isEmail(emailVicInput.value));
			valid = false;
		}

		if (isPassword(passwordVicInput.value)) {
			passwordVicInput.onError(isPassword(passwordVicInput.value));
			valid = false;
		}

		if (isCedula(cedulaVicInput.value)) {
			cedulaVicInput.onError(isCedula(cedulaVicInput.value));
			valid = false;
		}

		if (isRepeatPassword(passwordVicInput.value, passwordConfirVicmInput.value)) {
			passwordConfirVicmInput.onError(
				isRepeatPassword(passwordVicInput.value, passwordConfirVicmInput.value)
			);
			valid = false;
		}

        if (isName(nombreAtacInput.value, "nombre")) {
			nombreAtacInput.onError(isName(nombreAtacInput.value, "nombre"));
			valid = false;
		}

        if (isName(apellidoAtacInput.value, "apellido")) {
			apellidoAtacInput.onError(isName(apellidoAtacInput.value, "apellido"));
			valid = false;
		}

        if (isEmail(emailAtacInput.value)) {
			emailAtacInput.onError(isEmail(emailAtacInput.value));
			valid = false;
		}

        if (isPassword(passwordAtacInput.value)) {
			passwordAtacInput.onError(isPassword(passwordAtacInput.value));
			valid = false;
		}

        if (isCedula(cedulaAtacInput.value)) {
			cedulaAtacInput.onError(isCedula(cedulaAtacInput.value));
			valid = false;
		}

        if (isRepeatPassword(passwordAtacInput.value, passwordConfirAtacmInput.value)) {
			passwordConfirAtacmInput.onError(
				isRepeatPassword(passwordAtacInput.value, passwordConfirAtacmInput.value)
			);
			valid = false;
		}

		if (isNumber(distancia.value)) {
			distancia.onError(isNumber(distancia.value));
			valid = false;
		}
		
		return valid;
	};

    const sentence = (
		nombreVicInput: input,
		apellidoVicInput: input,
		emailVicInput: input,
		passwordVicInput: input,
		passwordConfirVicmInput: input,
		cedulaVicInput: input,
		nombreAtacInput: input,
		apellidoAtacInput: input,
		emailAtacInput:input,
		passwordAtacInput: input,
		passwordConfirAtacmInput: input,
		cedulaAtacInput: input,
		distancia:input
	) => {
            if(
                validateSentence(
                    nombreVicInput,
                    apellidoVicInput,
                    emailVicInput,
                    passwordVicInput,
                    passwordConfirVicmInput,
                    cedulaVicInput,
                    nombreAtacInput,
                    apellidoAtacInput,
                    emailAtacInput,
                    passwordAtacInput,
                    passwordConfirAtacmInput,
                    cedulaAtacInput,
					distancia
                )
            
            ){
                console.log('Todo pepa');
            }
        };

	return <SentenceForm sentence={sentence} />;
};


export default SentenceController;
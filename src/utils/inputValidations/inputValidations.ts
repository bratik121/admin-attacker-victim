export const notEmpty = (value: string) => (value ? false : true);

const validEmail = (email: string) =>
	!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);

export const isEmail = (email: string): string => {
	if (notEmpty(email)) return "Debe ingresar un email";
	if (validEmail(email)) return "Debe ingresar un email válido";
	return "";
};

export const isText = (text: string, name?: string): string => {
	if (notEmpty(text)) return `Debe ingresar ${name}`;

	return "";
};

const validSize = (size: number) => size < 6 || size > 20;

const validCompanyName = (name: string): boolean =>
	!name.match(/^[A-Za-z0-9 ,._&'-]+$/);

export const isCompanyName = (name: string): string => {
	if (notEmpty(name)) return "Debe ingresar un nombre";
	if (validCompanyName(name)) return "Debe ingresar un nombre válido";
	if (validSize(name.length))
		return "Debe ingresar un nombre entre 6 y 20 caracteres";
	return "";
};

const validRif = (rif: string): boolean => !rif.match(/^[J]-?[0-9]{8}-?[0-9]$/);

export const isRif = (rif: string): string => {
	if (notEmpty(rif)) return "Debe ingresar un rif";
	if (validRif(rif))
		return "Debe ingresar un rif válido, el formato es J-12345678-9";
	return "";
};

const validPhone = (phone: string): boolean => !phone.match(/^[0-9]{10,11}$/i);

export const isPhone = (phone: string): string => {
	if (notEmpty(phone)) return "Debe ingresar un teléfono";
	if (validPhone(phone)) return "Debe ingresar un teléfono válido";
	return "";
};

const validPassword = (password: string): boolean =>
	!password.match(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
	);

export const isPassword = (password: string): string => {
	if (notEmpty(password)) return "Debe ingresar una contraseña";
	if (validPassword(password))
		return "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial";
	return "";
};

const validRepeatPassword = (password: string, repeatPassword: string) =>
	password !== repeatPassword;

export const isRepeatPassword = (
	password: string,
	repeatPassword: string
): string => {
	if (notEmpty(repeatPassword)) return "Debe confirmar la contraseña";
	if (validRepeatPassword(password, repeatPassword))
		return "Las contraseñas no coinciden";
	return "";
};

const validName = (name: string) =>
	!name.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'´]{3,}$/i);

export const isName = (name: string, type: string): string => {
	if (notEmpty(name)) return `Debe ingresar un ${type}`;
	if (validName(name)) return `Debe ingresar un ${type} válido`;
	return "";
};

const validCedula = (cedula: string) => !cedula.match(/^[V|E]-?[0-9]{6,9}$/i);

export const isCedula = (cedula: string): string => {
	if (notEmpty(cedula)) return "Debe ingresar una cédula";
	if (validCedula(cedula))
		return "Debe ingresar una cédula válida, el formato es V-12345678";
	return "";
};

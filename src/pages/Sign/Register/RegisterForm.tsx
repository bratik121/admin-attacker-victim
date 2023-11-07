import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Input, Button } from "../../../components/common";
import { useInput, useInputPassword } from "../../../hooks";

type input = {
	value: string;
	onError: (error: string) => void;
	reset: () => void;
};

type Props = {
	register: (
		nombreInput: input,
		apellidoInput: input,
		emailInput: input,
		passwordInput: input,
		passwordConfirmInput: input,
		cedulaInput: input
	) => void;
};

const RegisterForm = ({ register }: Props) => {
	const nombreInput = useInput("");
	const apellidoInput = useInput("");
	const emailInput = useInput("");
	const passwordInput = useInputPassword("");
	const passwordConfirmInput = useInputPassword("");
	const cedulaInput = useInput("");

	const handleClick = () => {
		register(
			nombreInput,
			apellidoInput,
			emailInput,
			passwordInput,
			passwordConfirmInput,
			cedulaInput
		);
	};

	return (
		<section className="form__container flex  h-full w-full flex-col gap-6 overflow-scroll  py-4 px-10 md:w-full md:px-20">
			<h2 className="w-[70%] text-left text-4xl font-semibold text-primary-600">
				Ingresa los datos del administrador
			</h2>
			{/* Grid de los inputs */}
			<div className="inputs_container grid grid-cols-1 gap-y-2  gap-x-6 md:grid-cols-2">
				<Input
					text="Nombre"
					error={nombreInput.error}
					value={nombreInput.value}
					onChange={nombreInput.onChange}
					onFocus={nombreInput.onFocus}
				/>
				<Input
					text="Correo"
					error={emailInput.error}
					value={emailInput.value}
					onChange={emailInput.onChange}
					onFocus={emailInput.onFocus}
				/>
				<Input
					text="Apellido"
					error={apellidoInput.error}
					value={apellidoInput.value}
					onChange={apellidoInput.onChange}
					onFocus={apellidoInput.onFocus}
				/>
				<Input
					text="Contraseña"
					error={passwordInput.error}
					value={passwordInput.value}
					onChange={passwordInput.onChange}
					onFocus={passwordInput.onFocus}
					onClick={passwordInput.toggleShowPassword}
					type={passwordInput.showPassword ? "text" : "password"}
					rightIcon={
						passwordInput.showPassword ? (
							<AiFillEyeInvisible className="cursor-pointer" />
						) : (
							<AiFillEye className="cursor-pointer" />
						)
					}
				/>
				<Input
					text="Cedula"
					error={cedulaInput.error}
					value={cedulaInput.value}
					onChange={cedulaInput.onChange}
					onFocus={cedulaInput.onFocus}
				/>
				<Input
					text="Confirmar contraseña"
					error={passwordConfirmInput.error}
					value={passwordConfirmInput.value}
					onChange={passwordConfirmInput.onChange}
					onFocus={passwordConfirmInput.onFocus}
					onClick={passwordConfirmInput.toggleShowPassword}
					type={passwordConfirmInput.showPassword ? "text" : "password"}
					rightIcon={
						passwordConfirmInput.showPassword ? (
							<AiFillEyeInvisible className="cursor-pointer" />
						) : (
							<AiFillEye className="cursor-pointer" />
						)
					}
				/>
			</div>
			<div className=" px-3 md:px-6">
				<Button text="Registrarse" onClick={handleClick} />
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-2  font-semibold md:flex-row">
				<span className="text-sm  text-c_gray-500">¿Ya tienes una cuenta?</span>
				<Link to="/">
					<span className="text-sm text-primary-600 underline duration-200 hover:text-primary-400">
						Inicia sesión
					</span>
				</Link>
			</div>
		</section>
	);
};

export default RegisterForm;

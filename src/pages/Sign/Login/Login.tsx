import { Link } from "react-router-dom";
import { Button, Input, Divider } from "../../../components/common";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { useInput, useInputPassword } from "../../../hooks";
import type { input } from "../../../types";

type Props = {
	handleLogin: (emailInput: input, passwordInput: input) => void;
};
const Login = ({ handleLogin }: Props) => {
	const emailInput = useInput("");
	const passwordInput = useInputPassword("");

	const handleClick = () => {
		handleLogin(emailInput, passwordInput);
	};

	return (
		<section className="form__container flex h-full flex-col justify-center gap-6 overflow-y-scroll py-4  px-10 md:w-full md:px-44">
			{/* Form title */}
			<h2 className="text-center text-4xl font-semibold text-primary-600">
				¡Hola de nuevo!
			</h2>
			<form action="" className="flex w-full flex-col gap-6 ">
				{/* input container */}
				<div className="flex flex-col gap-2">
					<Input
						text="Correo"
						value={emailInput.value}
						onChange={emailInput.onChange}
						error={emailInput.error}
						onFocus={emailInput.onFocus}
					/>
					{/* Contenedor contrasena y recuperar contrasena */}
					<div className="fex flex-col gap-[10px]  ">
						{/* Password input */}
						<Input
							text="Contraseña"
							onClick={passwordInput.toggleShowPassword}
							type={passwordInput.showPassword ? "text" : "password"}
							value={passwordInput.value}
							onChange={passwordInput.onChange}
							error={passwordInput.error}
							onFocus={passwordInput.onFocus}
							rightIcon={
								passwordInput.showPassword !== true ? (
									<AiFillEye className="cursor-pointer" />
								) : (
									<AiFillEyeInvisible className="cursor-pointer" />
								)
							}
						/>
						{/* Forgot password link */}
						<Link
							to="forgotpassword"
							className="mt-3 flex items-center justify-end gap-[10px] px-[10px] text-sm text-primary-600 duration-200 hover:text-primary-400"
						>
							<span>Olvidé mi contraseña</span>
							<FiLock />
						</Link>
					</div>
				</div>
				<Button text="Iniciar sesión" onClick={handleClick} />
			</form>
			<div className="w-full">
				<Divider text="O" />
			</div>
			<div className="flex w-full items-center justify-center gap-2 font-semibold">
				<span className="text-sm  text-c_gray-500">¿No tienes cuenta?</span>
				<Link to="register">
					<span className="text-sm text-primary-600 underline duration-200 hover:text-primary-400">
						Regístrate
					</span>
				</Link>
			</div>
		</section>
	);
};

export default Login;

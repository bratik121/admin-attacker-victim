import { Input, Button } from "../../components/common";
import { useInput,useInputPassword } from "../../hooks";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import NavBar from '../../components/NavBar/Navbar';
import './Sentence.css'

type input = {
	value: string;
	onError: (error: string) => void;
	reset: () => void;
};

type Props = {
	sentence: (
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
		cedulaAtacInput: input
	) => void;
};

const SentenceForm = ({ sentence }: Props) => {
	const nombreVicInput = useInput("");
	const apellidoVicInput = useInput("");
	const emailVicInput = useInput("");
	const passwordVicInput = useInputPassword("");
	const passwordConfirVicmInput = useInputPassword("");
	const cedulaVicInput = useInput("");
	const nombreAtacInput = useInput("");
	const apellidoAtacInput = useInput("");
	const emailAtacInput = useInput("");
	const passwordAtacInput = useInputPassword("");
	const passwordConfirAtacmInput = useInputPassword("");
	const cedulaAtacInput = useInput("");


	const handleClick = () => {
		sentence(
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
			cedulaAtacInput

		);
	};

	return (
	<div> 
		<NavBar />
		<section className="form__container flex  h-full w-full flex-col gap-6 overflow-scroll  py-4 px-10 md:w-full md:px-20">
			<h2 className="title w-[70%] text-left text-4xl font-semibold text-primary-600">
				Ingresa los datos de la Víctima
			</h2>

			{/* Grid de los inputs */}
			<div className="inputs_container grid grid-cols-1 gap-y-2  gap-x-6 md:grid-cols-2">
				<Input
					text="Nombre"
					error={nombreVicInput.error}
					value={nombreVicInput.value}
					onChange={nombreVicInput.onChange}
					onFocus={nombreVicInput.onFocus}
				/>
				<Input
					text="Correo"
					error={emailVicInput.error}
					value={emailVicInput.value}
					onChange={emailVicInput.onChange}
					onFocus={emailVicInput.onFocus}
				/>
				<Input
					text="Apellido"
					error={apellidoVicInput.error}
					value={apellidoVicInput.value}
					onChange={apellidoVicInput.onChange}
					onFocus={apellidoVicInput.onFocus}
				/>
				<Input
					text="Contraseña"
					error={passwordVicInput.error}
					value={passwordVicInput.value}
					onChange={passwordVicInput.onChange}
					onFocus={passwordVicInput.onFocus}
					onClick={passwordVicInput.toggleShowPassword}
					type={passwordVicInput.showPassword ? "text" : "password"}
					rightIcon={
						passwordVicInput.showPassword ? (
							<AiFillEyeInvisible className="cursor-pointer" />
						) : (
							<AiFillEye className="cursor-pointer" />
						)
					}
				/>
				<Input
					text="Cedula"
					error={cedulaVicInput.error}
					value={cedulaVicInput.value}
					onChange={cedulaVicInput.onChange}
					onFocus={cedulaVicInput.onFocus}
				/>
				<Input
					text="Confirmar contraseña"
					error={passwordConfirVicmInput.error}
					value={passwordConfirVicmInput.value}
					onChange={passwordConfirVicmInput.onChange}
					onFocus={passwordConfirVicmInput.onFocus}
					onClick={passwordConfirVicmInput.toggleShowPassword}
					type={passwordConfirVicmInput.showPassword ? "text" : "password"}
					rightIcon={
						passwordConfirVicmInput.showPassword ? (
							<AiFillEyeInvisible className="cursor-pointer" />
						) : (
							<AiFillEye className="cursor-pointer" />
						)
					}
				/>
			</div>
			{/*Atacante */}
			<h2 className="w-[70%] text-left text-4xl font-semibold text-primary-600">
				Ingresa los datos del Atacante
			</h2>
			<div className="inputs_container grid grid-cols-1 gap-y-2  gap-x-6 md:grid-cols-2">
				<Input
					text="Nombre"
					error={nombreAtacInput.error}
					value={nombreAtacInput.value}
					onChange={nombreAtacInput.onChange}
					onFocus={nombreAtacInput.onFocus}
				/>
				
				<Input
					text="Correo"
					error={emailAtacInput.error}
					value={emailAtacInput.value}
					onChange={emailAtacInput.onChange}
					onFocus={emailAtacInput.onFocus}
				/>
				
				<Input
					text="Apellido"
					error={apellidoAtacInput.error}
					value={apellidoAtacInput.value}
					onChange={apellidoAtacInput.onChange}
					onFocus={apellidoAtacInput.onFocus}
				/>
				
				<Input
					text="Contraseña"
					error={passwordAtacInput.error}
					value={passwordAtacInput.value}
					onChange={passwordAtacInput.onChange}
					onFocus={passwordAtacInput.onFocus}
					onClick={passwordAtacInput.toggleShowPassword}
					type={passwordAtacInput.showPassword ? "text" : "password"}
					rightIcon={
						passwordAtacInput.showPassword ? (
							<AiFillEyeInvisible className="cursor-pointer" />
						) : (
							<AiFillEye className="cursor-pointer" />
						)
					}
				/>
				
				<Input
					text="Cedula"
					error={cedulaAtacInput.error}
					value={cedulaAtacInput.value}
					onChange={cedulaAtacInput.onChange}
					onFocus={cedulaAtacInput.onFocus}
				/>
				<Input
					text="Confirmar contraseña"
					error={passwordConfirAtacmInput.error}
					value={passwordConfirAtacmInput.value}
					onChange={passwordConfirAtacmInput.onChange}
					onFocus={passwordConfirAtacmInput.onFocus}
					onClick={passwordConfirAtacmInput.toggleShowPassword}
					type={passwordConfirAtacmInput.showPassword ? "text" : "password"}
					rightIcon={
						passwordConfirAtacmInput.showPassword ? (
							<AiFillEyeInvisible className="cursor-pointer" />
						) : (
							<AiFillEye className="cursor-pointer" />
						)
					}
				/>
			</div>
			<div className=" px-3 md:px-6">
				<Button text="Guardar" onClick={handleClick} />
			</div>
		</section>
	</div>
	);
};

export default SentenceForm;

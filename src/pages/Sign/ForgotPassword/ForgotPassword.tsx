import { Input, Button } from "../../../components/common";
import { useInput } from "../../../hooks";
import { CiMail } from "react-icons/ci";
import { isEmail } from "../../../utils";

const ForgotPassword = () => {
	const emailInput = useInput("");

	const validateEmail = () => {
		let value = true;
		if (isEmail(emailInput.value)) {
			emailInput.onError(isEmail(emailInput.value));
			value = false;
		}
		return value;
	};
	const handleClick = () => {
		if (validateEmail()) {
			console.log("enviar correo");
			emailInput.reset();
		}
	};
	return (
		<section className="flex h-full w-full flex-col items-center justify-center gap-y-10 md:gap-y-6">
			{/* Title and icon */}
			<div className="flex flex-col items-center gap-y-8 ">
				<h2 className="w-[70%]  text-center text-3xl font-semibold text-primary-600 md:text-4xl">
					¿Olvidaste tu contraseña?
				</h2>
				<div className="outsideCircle flex aspect-square w-[140px] items-center justify-center rounded-full bg-primary-100">
					<div className="insideCircle flex aspect-square w-[80%] items-center justify-center rounded-full bg-primary-200">
						<CiMail className="text-center text-7xl text-c_gray-800" />
					</div>
				</div>
			</div>
			{/* Button and input */}
			<div className="flex w-[85%] flex-col gap-y-4 md:w-[40%] ">
				<Input
					text="Correo electrónico"
					error={emailInput.error}
					value={emailInput.value}
					onChange={emailInput.onChange}
					onFocus={emailInput.onFocus}
				/>
				<Button text="Enviar correo" onClick={handleClick} />
			</div>
		</section>
	);
};

export default ForgotPassword;

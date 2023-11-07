import { useInputPassword } from "../../../hooks";
import { Input, Button } from "../../../components/common";
import { isPassword, isRepeatPassword } from "../../../utils";
import { RiKey2Line } from "react-icons/ri";

const ResetPassword = () => {
	const passwordInput = useInputPassword("");
	const confirmPasswordInput = useInputPassword("");

	const validatePassword = () => {
		let value = true;
		if (isPassword(passwordInput.value)) {
			passwordInput.onError(isPassword(passwordInput.value));
			value = false;
		}

		if (isRepeatPassword(passwordInput.value, confirmPasswordInput.value)) {
			confirmPasswordInput.onError(
				isRepeatPassword(passwordInput.value, confirmPasswordInput.value)
			);
			value = false;
		}
		return value;
	};
	const handleClick = () => {
		if (validatePassword()) {
			console.log("Password changed");
			passwordInput.reset();
			confirmPasswordInput.reset();
		}
	};
	return (
		<section className="flex h-full w-full flex-col items-center justify-center gap-y-10 md:gap-y-4">
			{/* Title and icon */}
			<div className="flex flex-col items-center gap-y-4 ">
				<h2 className="w-[70%] text-center text-3xl   font-semibold text-primary-600 md:text-4xl">
					Cambia tu contraseña{" "}
				</h2>
				<div className="outsideCircle flex aspect-square w-[140px] items-center justify-center rounded-full bg-primary-100">
					<div className="insideCircle flex aspect-square w-[80%] items-center justify-center rounded-full bg-primary-200">
						<RiKey2Line className="text-center text-7xl text-c_gray-800" />
					</div>
				</div>
			</div>
			{/* Button and input */}
			<div className="flex w-[85%] flex-col gap-y-3 md:w-[40%] ">
				<div className="flex flex-col gap-y-2">
					<Input
						text="Nueva contraseña"
						error={passwordInput.error}
						value={passwordInput.value}
						onChange={passwordInput.onChange}
						onFocus={passwordInput.onFocus}
					/>
					<Input
						text="Nueva contraseña"
						error={confirmPasswordInput.error}
						value={confirmPasswordInput.value}
						onChange={confirmPasswordInput.onChange}
						onFocus={confirmPasswordInput.onFocus}
					/>
				</div>
				<Button text="Guardar" onClick={handleClick} />
			</div>
		</section>
	);
};

export default ResetPassword;

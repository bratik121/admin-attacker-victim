import RegiterController from "./RegisterController";
import RegisterSuccesfull from "./RegisterSuccesfull";
import type { RootState } from "./../../../redux/store";
import { useSelector } from "react-redux";

const Register = () => {
	const isLoged = useSelector((state: RootState) => state.auth.isLoged);

	return (
		<section className="h-full w-full">
			{isLoged ? <RegisterSuccesfull /> : <RegiterController />}
		</section>
	);
};

export default Register;

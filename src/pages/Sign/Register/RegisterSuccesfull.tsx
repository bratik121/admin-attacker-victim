import { Button } from "../../../components/common";
import Lottie from "lottie-react";
import animationData from "../../../assets/sign/registerAnimation.json";
import { CustomLink } from "../../../components/common";

const RegisterSuccesfull = () => {
	return (
		<div className="flex h-full w-full flex-col items-center px-2 py-4 md:px-10 ">
			{/* Titulo y lottie */}
			<div className="relative flex h-[50%] w-[100%] flex-col items-center gap-4 ">
				{/* Titulos */}
				<div className="mt-6 flex flex-col items-center gap-4">
					<h2 className="text-center text-4xl font-semibold text-primary-600">
						¡Registro exitoso!
					</h2>
					<h4 className="w-[60%] text-center text-c_gray-400">
						¡Felicidades su empresa ha sido registrada con éxito!
					</h4>
				</div>
				<Lottie
					animationData={animationData}
					className=" absolute top-0 translate-y-[50%]  md:h-full md:w-full md:translate-y-[30%] "
					loop={false}
				/>{" "}
			</div>

			{/* Botones */}
			<div className="flex h-1/2 w-[90%] flex-col items-center justify-center gap-y-8 md:w-[80%]">
				<span className="text-center text-lg font-semibold">
					¿Qué te gustaría hacer a continuación?
				</span>
				<div className=" flex w-[70%] flex-col items-center justify-center gap-4 ">
					<CustomLink to="/dashboard" className="w-full">
						<Button text="ir al Dashboard" onClick={() => {}} fill={false} />
					</CustomLink>
					<CustomLink to="/sentence-form" className="w-full">
						<Button text="Registrar Sentencia" onClick={() => {}} />
					</CustomLink>
				</div>
			</div>
		</div>
	);
};

export default RegisterSuccesfull;

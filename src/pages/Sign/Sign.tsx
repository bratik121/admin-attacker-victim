import SignImg from "../../assets/sign/adminSign.webp";
import { Routes, Route } from "react-router-dom";
import LoginController from "./Login/LoginController";
import Register from "./Register/Register";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetPassword from "./ForgotPassword/ResetPassword";

import "./style.css";

const Sign = () => {
	return (
		<div className="relative flex h-screen w-screen items-center justify-center ">
			{/* Background Colors */}
			<div className="absolute top-0 left-0 -z-10 flex h-full w-full">
				<div className="left h-full w-[85%] bg-primary-100"></div>
				<div className="right h-full w-[15%] bg-primary-600"></div>
			</div>
			{/* SignPanel */}
			<div className="flex h-[90%] w-[80%] bg-white shadow-lg">
				{/* Left img */}
				<div className="hidden h-full w-[25%] md:block">
					<img className="h-full w-full object-cover" src={SignImg} alt="" />
				</div>
				<div className="form__container h-full w-full  md:w-[75%]">
					<Routes>
						<Route path="/" element={<LoginController />} />
						<Route path="register" element={<Register />} />
						<Route path="forgotpassword" element={<ForgotPassword />} />
						<Route path="resetpassword/*" element={<ResetPassword />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default Sign;

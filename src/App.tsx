import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { NavBar } from "./components";
import { Sign, Dashboard, SetenceForm } from "./pages";
import type { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
	const { isLoged } = useSelector((state: RootState) => state.auth);
	const location = useLocation();
	const isOnSign = location.pathname.includes("/");
	return (
		<div className="">
			{isLoged && <NavBar />}
			<main className={` w-full ${!isOnSign && "pt-[72px]"}`}>
				<Routes>
					<Route path="/" element={<Navigate to="/sign" />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/sentence-form" element={<SetenceForm />} />
					<Route path="/sign" element={<Sign />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;

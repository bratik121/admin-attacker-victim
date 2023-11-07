import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BiLogOut, BiUser } from "react-icons/bi";
import { motion as m, AnimatePresence } from "framer-motion";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

const arrowVariant = {
	initial: {
		rotate: 0,
		transition: {
			duration: 0.3,
			type: "spring",
		},
	},
	animate: {
		rotate: -180,
	},
};

const avatarMenuVariant = {
	initial: {
		opacity: 0,
		y: 40,
		scale: 0,
	},
	animate: {
		opacity: 1,
		y: "125%",
		scale: 1,
		transition: {
			duration: 0.3,
			type: "spring",
		},
	},
};

const AvatarMenu = ({ toggleActive }: { toggleActive: () => void }) => {
	return (
		<m.div
			className="absolute right-0 bottom-0 flex w-full flex-col rounded-lg border border-c_gray-300   text-primary-600"
			variants={avatarMenuVariant}
			initial="initial"
			animate="animate"
			exit="initial"
		>
			<div
				className="flex cursor-pointer items-center gap-x-2 py-2 hover:bg-primary-100 px-4"
				onClick={toggleActive}
			>
				<BiUser />
				<span>Perfil</span>
			</div>
			<div
				className="flex cursor-pointer items-center gap-x-2 py-2 hover:bg-primary-100 px-4"
				onClick={toggleActive}
			>
				<BiLogOut />
				<span>Salir</span>
			</div>
		</m.div>
	);
};

const NavAvatar = () => {
	const [acttive, setActive] = useState<boolean>(false);

	const { nombre } = useSelector((state: RootState) => state.admin);

	const toggleActive = () => {
		setActive(!acttive);
	};

	const handleBlur = () => {
		setActive(false);
	};
	return (
		<div
			className="relative flex h-10 items-center gap-x-1 rounded-lg bg-primary-100 p-1 text-primary-600 px-4"
			onBlur={handleBlur}
			tabIndex={-1}
		>
			<span className="capitalize">{nombre}</span>
			<div
				onClick={toggleActive}
				className={`cursor-pointer transition duration-300 ${
					acttive ? "rotate-180" : ""
				}
          `}
			>
				<BsChevronDown className="font-bold" />
			</div>
			<AnimatePresence>
				{acttive && <AvatarMenu toggleActive={toggleActive} />}
			</AnimatePresence>
		</div>
	);
};
export default NavAvatar;

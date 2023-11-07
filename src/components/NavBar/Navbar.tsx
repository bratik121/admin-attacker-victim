import { useRef, useEffect } from "react";
import logo from "../../assets/nav/AttackerVictimLogo.png";
import { CustomLink } from "../common";
import NavAvatar from "./Avatar/NavAvatar";
import "./style.css";

type link = {
	text: string;
	to: string;
};

const links: link[] = [
	{
		text: "Home",
		to: "/dashboard",
	},
	{
		text: "Registrar Sentencia",
		to: "/sentence-form",
	},
	{
		text: "Mis proovedores",
		to: "/my-providers",
	},
	{
		text: "Mis Beneficios",
		to: "/my-benefits",
	},
];

const Navbar = () => {
	useEffect(() => {
		goToFirst();
	}, []);

	const goToFirst = () => {
		indicator(document.querySelector(".link") as HTMLDivElement);
	};

	const marker = useRef<HTMLDivElement>(null);

	const indicator = (t: HTMLDivElement) => {
		if (marker.current) {
			const markerWidth = t.offsetWidth;
			marker.current.style.top = t.offsetTop + t.offsetHeight + 2 + "px";
			marker.current.style.height = "3px";
			marker.current.style.width = markerWidth + "px";
			marker.current.style.left =
				t.offsetLeft + (t.offsetWidth - markerWidth) / 2 + "px";
		}
	};

	const handleLinkClick = (e: any) => {
		const target = e.target as HTMLDivElement;
		indicator(target);
	};

	return (
		<header className="flex h-[72px] w-full items-center justify-between px-4 border-b-2 border-primary-200 fixed ">
			{/* LeftSide */}
			<div className="leftSide flex gap-x-4">
				{/* Logo */}

				<div className="logo__container aspect-square w-20" onClick={goToFirst}>
					<img
						src={logo}
						alt="AdminLogo"
						className="h-full w-full object-cover"
					/>
				</div>

				{/* Nav links */}
				<nav className="relative flex items-center gap-4">
					<div id="marker" ref={marker}></div>
					{links.map((link) => (
						<CustomLink key={link.text} to={link.to}>
							<div
								className="link  font-medium text-c_gray-700"
								onClick={(e) => {
									handleLinkClick(e);
								}}
							>
								{link.text}
							</div>
						</CustomLink>
					))}
				</nav>
			</div>
			{/* RightSide */}
			<div className="rightSide flex h-[65%] items-center gap-x-4 px-2">
				<div className="divider h-full w-[2px] bg-c_gray-300"></div>
				<NavAvatar />
			</div>
		</header>
	);
};

export default Navbar;

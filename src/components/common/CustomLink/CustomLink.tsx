import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
	text?: string;
	to: string;
	onClick?: (e?: any) => void;
	className?: string;
}>;

const CustomLink = ({ children, to, onClick, className }: Props) => {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "auto" });
	};
	const handleClick = () => {
		onClick && onClick();
		scrollTop();
	};
	return (
		<Link to={to} onClick={handleClick} className={className}>
			{children}
		</Link>
	);
};
export default CustomLink;

type Props = {
	fill?: boolean;
	onClick: () => void;
	text: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
};

const getStyle = (fill: boolean, disabled: boolean): string => {
	return fill
		? disabled
			? "bg-primary-200 text-c_gray-25"
			: "bg-primary-600 hover:bg-primary-400  text-c_gray-25"
		: disabled
		? "text-primary-200 border-primary-200"
		: "border-primary-600 hover:border-primary-400  text-primary-600 hover:text-primary-400 ";
};
const Button = (props: Props) => {
	const {
		fill = true,
		onClick,
		text,
		leftIcon,
		rightIcon,
		disabled = false,
		type = "button",
	} = props;
	return (
		<button
			className={`flex w-full items-center justify-between gap-2  rounded-lg  border
       px-4 py-3 transition duration-200 ease-in-out ${getStyle(
					fill,
					disabled
				)}`}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			<div className="w-[20%]">{leftIcon}</div>
			<div className="w-fit font-semibold"> {text}</div>
			<div className="flex w-[20%] justify-end  ">{rightIcon}</div>
		</button>
	);
};

export default Button;

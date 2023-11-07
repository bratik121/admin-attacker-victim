type Props = {
	text: string;
};

const Divider = ({ text }: Props) => {
	return (
		<div className="grid w-full grid-cols-3 items-center ">
			<hr className="border-c_gray-300" />
			<p className="text-center text-sm text-c_gray-500">{text}</p>
			<hr className="border-c_gray-300" />
		</div>
	);
};

export default Divider;

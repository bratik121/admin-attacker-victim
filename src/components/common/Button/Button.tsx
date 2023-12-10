type Props = {
    fill?: boolean;
    onClick?: () => void;
    text: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
};

const getTextSize: Record<string, string> = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
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
        textSize = "sm",
    } = props;

    return (
        <button
            className={`flex min-w-fit w-full items-center justify-between gap-2  rounded-lg  border
       px-4 py-[10px] transition duration-200 ease-in-out ${getStyle(
                    fill,
                    disabled
                )}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {leftIcon && <div className="w-[20%]">{leftIcon}</div>}
            <div className={`w-full ${getTextSize[textSize]} font-semibold`}>
                {text}
            </div>
            {rightIcon && <div className="flex w-[20%] justify-end">{rightIcon}</div>}
        </button>
    );
};

export default Button;
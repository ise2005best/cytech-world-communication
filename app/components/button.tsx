import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type ButtonVariant = "dark" | "outline";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  isActive?: boolean;
};

const baseStyles =
  "group inline-flex w-fit items-center uppercase font-secondary md:text-sm text-xs py-2.5 px-5 rounded-4xl transition duration-300";

const variantStyles: Record<ButtonVariant, string> = {
  dark: "bg-[#1E1E1E] text-primary md:text-white md:hover:text-primary",
  outline:
    "bg-[#1E1E1E]/20 border border-gray-300 text-white hover:border-primary hover:text-primary",
};

const activeOutlineStyles = "bg-[#1E1E1E]/20 border border-primary text-primary";

const Button = ({
  href,
  children,
  variant = "dark",
  className = "",
  isActive = false,
}: ButtonProps) => {
  const variantClassName =
    variant === "outline" && isActive ? activeOutlineStyles : variantStyles[variant];

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantClassName} ${className}`}
    >
      {children}
      {variant === "dark" && (
        <span className="ml-3 flex w-5 items-center overflow-hidden py-1 opacity-100 transition-all duration-300 md:ml-0 md:w-0 md:py-0 md:opacity-0 md:group-hover:ml-3 md:group-hover:w-5 md:group-hover:py-1 md:group-hover:opacity-100">
          <FaArrowRight className="w-5 h-5 shrink-0 border rounded-full p-0.5 border-primary" />
        </span>
      )}
    </Link>
  );
};

export default Button;

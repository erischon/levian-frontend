interface ButtonProps {
  color?: string;
  children: React.ReactNode;
}

/**
 * @description Button component
 * @returns {JSX.Element}
 */
const Button: React.FC<ButtonProps> = ({ children, color }): JSX.Element => {
  return (
    <button
      className={`my-2 px-6 py-2 ${
        color ? color : "bg-teal-700"
      } text-white font-semibold rounded-md shadow-sm hover:opacity-80 transition-opacity duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;

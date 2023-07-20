interface ButtonProps {
  children: React.ReactNode;
}

/**
 * @description Button component
 * @returns {JSX.Element}
 */
const Button: React.FC<ButtonProps> = ({ children }): JSX.Element => {
  return (
    <button className="px-6 py-2 bg-cyan-600 text-white font-semibold rounded-md">
      {children}
    </button>
  );
};

export default Button;

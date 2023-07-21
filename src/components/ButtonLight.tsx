interface ButtonProps {
  children: React.ReactNode;
}

/**
 * @description Button component
 * @version 1.0.0
 * @returns {JSX.Element}
 */
const ButtonLight: React.FC<ButtonProps> = ({ children }): JSX.Element => {
  return (
    <button className="my-2 px-6 py-2 bg-indigo-200 text-gray-700 font-medium text-sm rounded-md shadow-sm hover:opacity-80 transition-opacity duration-300 ease-in-out">
      {children}
    </button>
  );
};

export default ButtonLight;

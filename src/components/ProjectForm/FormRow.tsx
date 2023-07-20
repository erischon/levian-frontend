interface FormRowProps {
  label: string;
  type: string;
  name: string;
  children?: React.ReactNode;
}

const FormRow: React.FC<FormRowProps> = ({ label, type, name, children }) => {
  return (
    <>
      <div className="flex flex-col mb-2">
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
        {type === "select" ? (
          <select name={name} id={name} className="block border">
            {children}
          </select>
        ) : (
          <input id={name} type={type} className="block border" />
        )}
      </div>
    </>
  );
};

export default FormRow;

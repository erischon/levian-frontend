import { UseFormRegister, FieldValues } from "react-hook-form";

interface FormRowProps {
  label: string;
  type: string;
  name: string;
  children?: React.ReactNode;
  register: UseFormRegister<FieldValues>;
}

/**
 * @description FormRow component, used to create a row in a form
 * @return {JSX.Element}
 */
const FormRow: React.FC<FormRowProps> = ({
  label,
  type,
  name,
  children,
  register,
}) => {
  return (
    <>
      <div className="flex flex-col mb-2">
        <label htmlFor={name} className="text-sm">
          {label}
        </label>

        {type === "select" ? (
          <select id={name} className="block border" {...register(`${name}`)}>
            {children}
          </select>
        ) : (
          <input
            id={name}
            type={type}
            className="block border"
            {...register(`${name}`)}
          />
        )}
      </div>
    </>
  );
};

export default FormRow;

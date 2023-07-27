import { UseFormRegister, FieldValues } from "react-hook-form";

interface FormRowProps {
  label: string;
  type: string;
  name: string;
  children?: React.ReactNode;
  register: UseFormRegister<FieldValues>;
  errors?: any;
  required?: any;
}

/**
 * @description FormRow component, used to create a row in a form
 * @version 1.0.1
 */
const FormRow: React.FC<FormRowProps> = ({
  label,
  type,
  name,
  children,
  register,
  errors,
  required,
}) => {
  return (
    <>
      <div className="flex flex-col mb-2">
        <label htmlFor={name} className="text-xs">
          {label}
        </label>

        {(() => {
          switch (type) {
            case "select":
              return (
                <select
                  id={name}
                  className="block border p-2"
                  {...register(`${name}`, {
                    required: required,
                  })}
                >
                  {children}
                </select>
              );
            case "textarea":
              return (
                <textarea
                  id={name}
                  rows={3}
                  className="block border p-2"
                  placeholder={`Enter ${label}...`}
                  {...register(`${name}`, {
                    required: required,
                  })}
                >
                  {children}
                </textarea>
              );
            default:
              return (
                <input
                  id={name}
                  type={type}
                  className="block border p-2  placeholder-gray-400 placeholder-opacity-90"
                  placeholder={`Enter ${label}...`}
                  {...register(`${name}`, {
                    required: required,
                  })}
                />
              );
          }
        })()}

        <p className="text-red-500 text-sm italic">{errors?.[name]?.message}</p>
      </div>
    </>
  );
};

export default FormRow;

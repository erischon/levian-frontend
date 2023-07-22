"use client";

import { useForm } from "react-hook-form";

import FormRow from "./FormRow";
import Button from "../Button";

/**
 * @description CustomerForm component, used to create a new customer
 * @version 1.0.0
 * @return {JSX.Element}
 */
function CustomerForm(): JSX.Element {
  const form = useForm();

  const { register, control, handleSubmit } = form;

  const onSubmit = async (data: object) => {
    try {
      await fetch("http://localhost:3456/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("====== Form submitted", data);
    } catch (error) {
      console.log("", error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col w-full sm:max-w-xl px-6 py-6 mx-auto mb-6 bg-indigo-50 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow
          label="Nom du client"
          type="text"
          name="name"
          register={register}
        />

        <FormRow label="Email" type="email" name="email" register={register} />

        <FormRow label="Phone" type="text" name="phone" register={register} />

        <Button>Submit</Button>
      </form>
    </>
  );
}

export default CustomerForm;

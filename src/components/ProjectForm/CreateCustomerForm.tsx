"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import FormRow from "./FormRow";
import Button from "../Button";

/**
 * @description CreateCustomerForm component, used to create a new customer
 * @version 1.0.1
 */
function CreateCustomerForm({ userId }: { userId: string }) {
  const form = useForm();
  const router = useRouter();

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    data.user = userId;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/customers/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      form.reset();

      // TODO: redirect to the customer page
      router.replace("/dashboard");
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
          required={{ value: true, message: "Name is required" }}
          errors={errors}
        />

        <FormRow
          label="Email"
          type="email"
          name="email"
          register={register}
          required={{ value: true, message: "Email is required" }}
          errors={errors}
        />

        <FormRow
          label="Phone"
          type="text"
          name="phone"
          register={register}
          required={{ value: true, message: "Phone is required" }}
          errors={errors}
        />

        <Button>Submit</Button>
      </form>
    </>
  );
}

export default CreateCustomerForm;

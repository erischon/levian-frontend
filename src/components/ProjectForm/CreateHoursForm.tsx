"use client";

import { useForm } from "react-hook-form";

import FormRow from "./FormRow";
import Button from "../Button";

/**
 * @description CreateHoursForm component, used to create a new time spent
 * @version 1.0.0
 */
function CreateHoursForm({
  taskId,
  postRoute,
}: {
  taskId: string;
  postRoute: any;
}) {
  const form = useForm();

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    data.task = taskId;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URI}${postRoute}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      form.reset();
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
          label="Date"
          type="date"
          name="date"
          register={register}
          errors={errors}
          required={{ value: true, message: "Date is required" }}
        />

        <FormRow
          label="Time spent (in min)"
          type="number"
          name="hours"
          register={register}
          required={{ value: true, message: "Time spent is required" }}
          errors={errors}
        />

        <Button>Submit</Button>
      </form>
    </>
  );
}

export default CreateHoursForm;

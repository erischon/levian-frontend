"use client";

import { useForm } from "react-hook-form";

import FormRow from "./FormRow";
import Button from "../Button";

/**
 * @description CreateProjectForm component, used to create a new project
 * @version 1.0.1
 */
function CreateProjectForm({
  customers,
  userId,
}: {
  customers: Array<object>;
  userId: string;
}) {
  const form = useForm();

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    data.user = userId;

    console.log("====== data", data);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/projects/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
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
          label="Project name"
          type="text"
          name="name"
          register={register}
          required={{ value: true, message: "Name is required" }}
          errors={errors}
        />

        <FormRow
          label="Description"
          type="textarea"
          name="description"
          register={register}
          errors={errors}
          required={{ value: true, message: "Description is required" }}
        />

        <FormRow
          label="Client"
          type="select"
          name="customer"
          register={register}
          errors={errors}
          required={{ value: true, message: "Customer is required" }}
        >
          <option value="">Select a customer...</option>

          {customers?.map((customer: any) => (
            <option key={customer._id} value={customer._id}>
              {customer.name}
            </option>
          ))}
        </FormRow>

        <FormRow
          label="Date de début"
          type="date"
          name="startDate"
          register={register}
          errors={errors}
          required={{ value: true, message: "Start date is required" }}
        />

        <FormRow
          label="Status"
          type="select"
          name="status"
          register={register}
          errors={errors}
          required={{ value: true, message: "Status is required" }}
        >
          <option value="">Select a status...</option>

          <option value="in_progress">In progress</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </FormRow>

        <Button>Submit</Button>
      </form>
    </>
  );
}

export default CreateProjectForm;

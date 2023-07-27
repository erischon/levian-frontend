"use client";

import { useForm } from "react-hook-form";

import FormRow from "./FormRow";
import Button from "../Button";

/**
 * @description CreateTaskForm component, used to create a new task
 * @version 1.0.0
 */
function CreateTaskForm({
  projectId,
  userId,
}: {
  projectId: string;
  userId: string;
}) {
  const form = useForm();

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    data.project = projectId;
    data.user = userId;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/tasks/`, {
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
          label="Task name"
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
          label="Start date"
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

export default CreateTaskForm;

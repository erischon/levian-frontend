"use client";

import { useForm } from "react-hook-form";

import FormRow from "./FormRow";
import Button from "../Button";

/**
 * @description ProjectForm component, used to create a new project
 * @return {JSX.Element}
 */
function ProjectForm({ customers }: { customers: object }): JSX.Element {
  const form = useForm();

  const { register, control, handleSubmit } = form;

  const onSubmit = async (data: object) => {
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
          label="Nom du projet"
          type="text"
          name="name"
          register={register}
        />

        <FormRow
          label="Description"
          type="textarea"
          name="description"
          register={register}
        />

        <FormRow
          label="Client"
          type="select"
          name="customer"
          register={register}
        >
          {customers.map((customer: any) => (
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
        />

        <FormRow label="Status" type="select" name="status" register={register}>
          <option value="in_progress">In progress</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </FormRow>

        {/* <input type="hidden" {...register(`${id}`)} /> */}

        <Button>Submit</Button>
      </form>
    </>
  );
}

export default ProjectForm;

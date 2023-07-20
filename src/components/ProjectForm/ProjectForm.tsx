"use client";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import FormRow from "./FormRow";
import Button from "../Button";

/**
 * @description ProjectForm component, used to create a new project
 * @return {JSX.Element}
 */
function ProjectForm(): JSX.Element {
  const form = useForm();

  const { register, control, handleSubmit } = form;

  const onSubmit = async (data: object) => {
    try {
      await fetch("http://localhost:3456/api/projects", {
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
        className="flex flex-col w-full sm:max-w-xl px-6 py-6 mx-auto mb-6 bg-cyan-50 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow
          label="Nom du projet"
          type="text"
          name="name"
          register={register}
        />

        <FormRow label="Client" type="text" name="client" register={register} />

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

        <Button>Submit</Button>
      </form>

      <DevTool control={control} />
    </>
  );
}

export default ProjectForm;

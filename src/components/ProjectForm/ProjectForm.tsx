"use client";

import { useForm } from "react-hook-form";

import FormRow from "./FormRow";

const ProjectForm = () => {
  const form = useForm();

  return (
    <>
      <form className="flex flex-col w-full sm:max-w-xl px-6 py-6 mx-auto mb-6 bg-slate-50 rounded-md">
        <FormRow label="Nom du projet" type="text" name="name" />

        <FormRow label="Client" type="text" name="client" />

        <FormRow label="Date de début" type="date" name="startDate" />

        <FormRow label="Status" type="select" name="status">
          <option>In progress</option>
          <option>Completed</option>
          <option>Canceled</option>
        </FormRow>

        <button>Submit</button>
      </form>
    </>
  );
};
export default ProjectForm;

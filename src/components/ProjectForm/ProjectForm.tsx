"use client";

import { useForm } from "react-hook-form";

import FormRow from "./FormRow";

const ProjectForm = () => {
  const form = useForm();

  const { register } = form;

  return (
    <>
      <form className="flex flex-col w-full sm:max-w-xl px-6 py-6 mx-auto mb-6 bg-slate-50 rounded-md">
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

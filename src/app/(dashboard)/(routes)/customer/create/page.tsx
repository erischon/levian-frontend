"use client";

import { useSelector } from "react-redux";

import { CreateCustomerForm } from "@/components/ProjectForm/";

/**
 * @description CreateCustomerPage component, used to display the customer creation page
 * @version 1.0.1
 */
function CreateCustomerPage() {
  const { user } = useSelector((state: any) => state.user);

  return (
    <>
      <main className="w-[90%] sm:w-1/2 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Add a Customer
        </h1>

        <CreateCustomerForm userId={user?.id} />
      </main>
    </>
  );
}
export default CreateCustomerPage;

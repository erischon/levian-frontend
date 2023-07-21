import { CustomerForm } from "@/components/ProjectForm/";

/**
 * @description CustomerPage component, used to display the customer creation page
 * @version 1.0.0
 * @returns {JSX.Element}
 */
function CustomerPage(): JSX.Element {
  return (
    <>
      <main className="w-[90%] sm:w-1/2 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Add a Customer
        </h1>

        <CustomerForm />
      </main>
    </>
  );
}
export default CustomerPage;

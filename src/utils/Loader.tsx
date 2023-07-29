import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-[calc(100vh-80px)]">
      <BarLoader color={"#0f766e"} />
    </section>
  );
};

export default Loader;

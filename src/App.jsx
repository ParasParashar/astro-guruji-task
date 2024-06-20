import React from "react";
import Form from "./components/Form";
import { useFormHook } from "./context/FormProvider";

const App = () => {
  const { handleOpen } = useFormHook();
  return (
    <div
      className="flex p-10   h-screen justify-center items-center overflow-y-auto flex-col w-full gap-10   
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-500 to-white"
    >
      <section className="flex w-full h-full flex-col  items-center justify-center">
        <img
          src="https://www.guruji.life/wp-content/uploads/2022/08/Guruji-Logo-1.png"
          alt="Logo Image"
          className="w-3/5 sm:w-1/2 lg:w-1/4"
        />
        <h1 className=" break-words text-3xl lg:text-5xl font-serif font-bold text-blue-600 text-center line-clamp-3">
          Astro Guruji Consult with best Astrologers.
        </h1>
      </section>
      <h5 className="text-xl font-bold text-center text-black font-sans">
        Astro guruji Frontend Developer Assignment:{" "}
        <span className="text-black/70">Multi-Step Form with React</span>
      </h5>
      <button
        onClick={handleOpen}
        className="text-[1rem] p-2 text-white hover:opacity-80 bg-blue-500 rounded-lg shadow-xl"
      >
        Fill a Form to free consultation
      </button>
      {/* form handling  */}
      <Form />
    </div>
  );
};

export default App;

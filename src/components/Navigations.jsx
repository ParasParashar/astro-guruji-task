import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { FaRegCircleCheck } from "react-icons/fa6";

const Navigation = ({ step, nextStep, prevStep, handleSubmit }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        disabled={step === 1}
        className="p-2 bg-blue-500 hover:opacity-65 transition-all ease-in-out mr-auto rounded-lg text-lg flex items-center justify-center gap-x-4 text-white  disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={prevStep}
      >
        <GrLinkPrevious size={25} />
        Back
      </button>
      {step < 3 && (
        <button
          className="p-2 bg-blue-500 hover:opacity-65 transition-all ease-in-out rounded-lg ml-auto text-lg flex items-center justify-center gap-x-4 text-white "
          onClick={nextStep}
        >
          <GrLinkNext size={25} />
          Next
        </button>
      )}
      {step === 3 && (
        <button
          className="p-2 bg-blue-500 hover:opacity-65 transition-all ease-in-out rounded-lg ml-auto text-lg flex items-center justify-center gap-x-4 text-gray-100 "
          onClick={handleSubmit}
        >
          <FaRegCircleCheck size={25} />
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;

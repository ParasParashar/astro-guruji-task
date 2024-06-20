const StepNavigation = ({ step }) => {
  const steps = ["Personal Information", "Address Information", "Confirmation"];

  return (
    <section className="flex justify-between items-center mb-8">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = step >= stepNumber;
        const isCurrent = step === stepNumber;

        return (
          <div key={index} className="flex-1 flex justify-center items-center">
            <div
              className={`relative flex flex-col   items-center justify-between h-full w-full`}
            >
              <div
                className={`relative z-10  size-5  sm:size-10 rounded-full flex items-center justify-center ${
                  isActive
                    ? "bg-blue-500 text-white  font-bold text-sm md:text-xl"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {stepNumber}
              </div>
              <div
                className={`mt-2 text-center text-sm md:text-lg ${
                  isCurrent
                    ? "text-black font-semibold  font-serif "
                    : "text-gray-700"
                }`}
              >
                {label}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StepNavigation;

const Step3 = ({ formData }) => {
  return (
    <div className="flex flex-col gap-3 items-start justify-start ">
      <p className="text-[1.4rem]">
        <strong>Name:</strong> {formData.name}
      </p>
      <p className="text-[1.4rem]">
        <strong>Email:</strong> {formData.email}
      </p>
      <p className="text-[1.4rem]">
        <strong>Phone:</strong> {formData.phone}
      </p>
      <p className="text-[1.4rem]">
        <strong>Address Line 1:</strong> {formData.address1}
      </p>
      <p className="text-[1.4rem]">
        <strong>Address Line 2:</strong> {formData.address2}
      </p>
      <p className="text-[1.4rem]">
        <strong>City:</strong> {formData.city}
      </p>
      <p className="text-[1.4rem]">
        <strong>State:</strong> {formData.state}
      </p>
      <p className="text-[1.4rem]">
        <strong>Zip Code:</strong> {formData.zip}
      </p>
    </div>
  );
};

export default Step3;

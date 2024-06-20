import Input from "../Input";

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Input
        label="Address Line 1"
        id="address1"
        value={formData.address1}
        onchange={handleChange("address1")}
        errors={errors}
      />
      <Input
        label="Address Line 2"
        id="address2"
        value={formData.address2}
        onchange={handleChange("address2")}
        errors={errors}
      />
      <Input
        label="City"
        id="city"
        value={formData.city}
        onchange={handleChange("city")}
        errors={errors}
      />
      <Input
        label="State"
        id="state"
        value={formData.state}
        onchange={handleChange("state")}
        errors={errors}
      />
      <Input
        label="Zip Code"
        id="zip"
        value={formData.zip}
        onchange={handleChange("zip")}
        errors={errors}
      />
    </div>
  );
};

export default Step2;

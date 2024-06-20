import Input from "../Input";

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <div className="flex flex-col gap-5">
      <Input
        label="Name"
        id="name"
        value={formData.name}
        onchange={handleChange("name")}
        errors={errors}
      />
      <Input
        label="Email"
        id="email"
        value={formData.email}
        onchange={handleChange("email")}
        errors={errors}
      />
      <Input
        label="Phone"
        type={"number"}
        id="phone"
        value={formData.phone}
        onchange={handleChange("phone")}
        errors={errors}
      />
    </div>
  );
};

export default Step1;

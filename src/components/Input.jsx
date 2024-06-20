const Input = ({ disabled, label, errors, id, value, onchange, type }) => {
  return (
    <div className="w-full relative flex-col flex">
      <input
        type={type ? "number" : "text"}
        id={id}
        disabled={disabled}
        placeholder=""
        value={value}
        onChange={onchange}
        className={`peer p-4 w-full pt-6 disabled:opacity-70 font-semi-bold    bg-white filter backdrop-blur-xl  text-lg rounded-md border-2 outline-none transition disabled:cursor-not-allowed
 ${errors[id] ? "border-rose-500" : "border-neutral-300"}
 ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
`}
      />
      <label
        className={`absolute text-sm duration-150 transform-translate-y-3 top-3 left-3 z-10 origin-[0]
peer-placeholder-shown:scale-100
peer-placeholder-shown:tranlate-y-0
peer-focus:scale-75
peer-focus:-translate-y-4
${errors[id] ? "text-rose-500" : "text-zinc-500"}
`}
      >
        {label}
      </label>
      {errors && (
        <p className="text-red-500 text-md font-semibold">{errors[id]}</p>
      )}
    </div>
  );
};

export default Input;

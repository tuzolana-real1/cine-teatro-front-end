function Input({ name, id, label, placeholder, type = "text", value, onChange }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-white font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="
          relative
          bg-black
          p-2.5
          w-[95%]
          rounded-lg
          border-none
          text-red-600
          focus:outline-none
          focus:ring-1
          focus:ring-red-600
        "
      />
    </div>
  );
}

export default Input;
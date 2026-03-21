function TextArea({ name, id, label, placeholder, value, onChange }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-white font-medium">
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
            bg-[#1a1717]
            text-white
            w-[95%]
            h-[90px]
            p-2.5
            rounded-lg
            mt-2.5
            mb-5
            border
            border-white
            focus:outline-none
            focus:border-red-600
            "
      ></textarea>
    </div>
  );
}

export default TextArea;
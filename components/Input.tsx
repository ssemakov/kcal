export interface InputProps {
  id: string;
  placeholder: string;
  label?: string;
  type?: "text" | "number";
  Adornment?: React.ComponentType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  placeholder,
  label,
  type = "text",
  Adornment,
  onChange,
}: InputProps) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1
            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
              focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={onChange}
        />
        {Adornment && <Adornment />}
      </div>
    </div>
  );
}

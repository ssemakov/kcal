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

export interface StaticAdornmentProps {
  text: string;
}

export function RightStaticAdornment({ text }: StaticAdornmentProps) {
  return (
    <div
      className="absolute inset-y-0 right-5 flex w-11 items-center justify-start border-l border-gray-300
       pl-3 sm:text-sm"
    >
      <span className="text-gray-500 sm:text-sm">{text}</span>
    </div>
  );
}

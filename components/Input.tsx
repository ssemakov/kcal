export interface InputProps {
  id: string;
  placeholder: string;
  label?: string;
  type?: "text" | "number";
  RightAdornment?: React.ComponentType;
  BottomAdornment?: React.ComponentType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  placeholder,
  label,
  type = "text",
  RightAdornment,
  BottomAdornment,
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
      <div className="group relative mt-2 rounded-md shadow-sm">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1
            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
              group-focus:ring-inset group-focus:ring-indigo-600
                sm:text-sm sm:leading-6"
          onChange={onChange}
        />
        {RightAdornment && <RightAdornment />}
      </div>
      {BottomAdornment && <BottomAdornment />}
    </div>
  );
}

export interface StaticAdornmentProps {
  text: string;
}

export function RightStaticAdornment({ text }: StaticAdornmentProps) {
  return (
    <div
      className="absolute inset-y-0 right-5 flex w-11 items-center justify-start
       border-l border-gray-300 pl-3 group-focus:border-indigo-600
       sm:text-sm"
    >
      <span className="text-gray-500 sm:text-sm">{text}</span>
    </div>
  );
}

export function BottomStaticAdornment({ text }: StaticAdornmentProps) {
  return (
    <p className="mt-1 text-sm text-gray-300 contrast-more:text-gray-900">
      {text}
    </p>
  );
}

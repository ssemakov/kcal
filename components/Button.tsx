export interface ButtonProps {
  onClick?: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ onClick, title, type }: ButtonProps) {
  return (
    <button
      className="w-full rounded-md bg-indigo-600 py-2 px-3 text-sm
        font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-indigo-500"
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
}

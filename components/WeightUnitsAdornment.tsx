export default function Units() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center">
      <label htmlFor="currency" className="sr-only">
        Unit
      </label>
      <select
        id="unit"
        name="unit"
        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      >
        <option>grams</option>
        <option>lbs</option>
      </select>
    </div>
  );
}

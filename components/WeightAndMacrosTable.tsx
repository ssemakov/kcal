export type MacrosValues = {
  weight: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};

interface WeightAndMacrosTableProps {
  values: Array<MacrosValues>;
}

export default function WeightAndMacrosTable({
  values,
}: WeightAndMacrosTableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table
        className="w-full table-auto
        text-left text-gray-700"
      >
        <thead className="bg-gray-200 text-xs">
          <tr>
            <th className="p-3 uppercase">Weight (gram)</th>
            <th className="p-3 uppercase">Calories (kCal)</th>
            <th className="p-3 uppercase">Protein (gram)</th>
            <th className="p-3 uppercase">Fat (gram)</th>
            <th className="p-3 uppercase">Carbs (gram)</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <tr
              key={index}
              className="whitespace-nowrap border-b bg-white font-medium text-gray-800
                last:border-b-0"
            >
              <td data-testid={`weight-${index}`} className="p-3">
                {value.weight}
              </td>
              <td data-testid={`calories-${index}`} className="p-3">
                {value.calories}
              </td>
              <td data-testid={`protein-${index}`} className="p-3">
                {value.protein}
              </td>
              <td data-testid={`fat-${index}`} className="p-3">
                {value.fat}
              </td>
              <td data-testid={`carbs-${index}`} className="p-3">
                {value.carbs}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

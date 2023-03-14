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
            <th className="p-3 uppercase">Weight</th>
            <th className="p-3 uppercase">Calories</th>
            <th className="p-3 uppercase">Protein</th>
            <th className="p-3 uppercase">Fat</th>
            <th className="p-3 uppercase">Carbs</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <tr
              key={index}
              className="whitespace-nowrap border-b bg-white font-medium text-gray-800
                last:border-b-0"
            >
              <td className="p-3">{value.weight}</td>
              <td className="p-3">{value.calories}</td>
              <td className="p-3">{value.protein}</td>
              <td className="p-3">{value.fat}</td>
              <td className="p-3">{value.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

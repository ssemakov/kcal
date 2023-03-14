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
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th>Weight</th>
          <th>Calories</th>
          <th>Protein</th>
          <th>Fat</th>
          <th>Carbs</th>
        </tr>
      </thead>
      <tbody>
        {values.map((value, index) => (
          <tr key={index}>
            <td>{value.weight}</td>
            <td>{value.calories}</td>
            <td>{value.protein}</td>
            <td>{value.fat}</td>
            <td>{value.carbs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

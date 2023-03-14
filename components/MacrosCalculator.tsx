import { useState } from "react";
import WeightAndMacrosForm, {
  OnChangeParams,
} from "@components/WeightAndMacrosForm";
import WeightAndMacrosTable, {
  MacrosValues,
} from "@components/WeightAndMacrosTable";

function roundToTwo(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export default function MacrosCalculator() {
  const initialMacrosValues: MacrosValues[] = [
    {
      weight: 0,
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    },
  ];

  const [values, setValues] = useState<MacrosValues[]>(initialMacrosValues);

  function calculateMacros({ id, value }: OnChangeParams) {
    let newValue = parseFloat(value);
    if (isNaN(newValue)) newValue = 0;

    const totalMacrosValues = {
      ...values[0],
      [id]: newValue,
    };
    const weight = values[0].weight;

    function perHundredGram(value: number) {
      return (value / weight) * 100;
    }

    const perHundredsGramsValues = {
      weight: 100,
      calories: roundToTwo(perHundredGram(totalMacrosValues.calories)),
      protein: roundToTwo(perHundredGram(totalMacrosValues.protein)),
      fat: roundToTwo(perHundredGram(totalMacrosValues.fat)),
      carbs: roundToTwo(perHundredGram(totalMacrosValues.carbs)),
    };

    setValues([totalMacrosValues, perHundredsGramsValues]);
  }

  return (
    <>
      <WeightAndMacrosForm onChange={calculateMacros} />
      <WeightAndMacrosTable values={values} />
    </>
  );
}

import IngredientInputForm from "./IngredientInputForm";
import IngredientsTable from "./IngredientsTable";

function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value);
}

export default function Ingredients() {
  return (
    <>
      <h1>Ingredients</h1>
      <IngredientInputForm onChange={handleOnChange} />
      <IngredientsTable values={[]} />
    </>
  );
}

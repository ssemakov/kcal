import Input, { RightStaticAdornment } from "./Input";

type OnChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface IngredientInputFormProps {
  onChange?: OnChangeEventHandler;
}

export default function IngredientInputForm({
  onChange = () => {},
}: IngredientInputFormProps) {
  return (
    <div className="py-5 sm:py-6">
      <div className="grid gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input
            id="name"
            placeholder="Ingredient name"
            label="Ingredient name"
            type="text"
            onChange={onChange}
          />
          <Input
            id="weight"
            placeholder="0.0"
            label="Weight of the ingredient"
            type="number"
            RightAdornment={() => <RightStaticAdornment text="grams" />}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

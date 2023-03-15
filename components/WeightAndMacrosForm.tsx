import Button from "@components/Button";
import Input, {
  BottomStaticAdornment,
  RightStaticAdornment,
} from "@components/Input";
import WeightUnitsAdornment from "@components/WeightUnitsAdornment";

export interface OnChangeParams {
  id: string;
  value: string;
}

interface OnChangeEvent {
  (params: OnChangeParams): void;
}

export interface WeightAndMacrosFormProps {
  onChange?: OnChangeEvent;
}

export default function WeightAndMacrosForm({
  onChange,
}: WeightAndMacrosFormProps) {
  function handleOnChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange({ id: target.id, value: target.value });
  }

  return (
    <div className="py-5 sm:py-6">
      <div className="grid gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <Input
            id="weight"
            placeholder="0.0"
            label="Total weight of the cooked product"
            type="number"
            RightAdornment={() => <RightStaticAdornment text="grams" />}
            onChange={handleOnChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <Input
            id="calories"
            placeholder="0.0"
            type="number"
            label="Total calories"
            onChange={handleOnChange}
            RightAdornment={() => <RightStaticAdornment text="kCal" />}
            BottomAdornment={CombinedRawTipAdornment}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input
            id="protein"
            placeholder="0.0"
            type="number"
            label="Protein"
            onChange={handleOnChange}
            RightAdornment={() => <RightStaticAdornment text="grams" />}
            BottomAdornment={CombinedRawTipAdornment}
          />
          <Input
            id="fat"
            placeholder="0.0"
            type="number"
            label="Fat"
            onChange={handleOnChange}
            RightAdornment={() => <RightStaticAdornment text="grams" />}
            BottomAdornment={CombinedRawTipAdornment}
          />
          <Input
            id="carbs"
            placeholder="0.0"
            type="number"
            label="Carbs"
            onChange={handleOnChange}
            RightAdornment={() => <RightStaticAdornment text="grams" />}
            BottomAdornment={CombinedRawTipAdornment}
          />
        </div>
      </div>
    </div>
  );
}

function CombinedRawTipAdornment() {
  return <BottomStaticAdornment text="combined raw ingredients" />;
}

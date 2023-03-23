import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MacrosCalculator from "@components/MacrosCalculator";

describe("MacrosCalculator", () => {
  it("renders the form and the table", () => {
    render(<MacrosCalculator />);
    expect(screen.getByTestId("weight")).toBeInTheDocument();
    expect(screen.getByTestId("calories")).toBeInTheDocument();
    expect(screen.getByTestId("protein")).toBeInTheDocument();
    expect(screen.getByTestId("fat")).toBeInTheDocument();
    expect(screen.getByTestId("carbs")).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("calculates the macros values per 100 grams", () => {
    render(<MacrosCalculator />);
    const weightInput = screen.getByTestId("weight") as HTMLInputElement;
    const caloriesInput = screen.getByTestId("calories");
    const proteinInput = screen.getByTestId("protein");
    const fatInput = screen.getByTestId("fat");
    const carbsInput = screen.getByTestId("carbs");

    fireEvent.change(weightInput, { target: { value: "200" } });
    fireEvent.change(caloriesInput, { target: { value: "1000" } });
    fireEvent.change(proteinInput, { target: { value: "100" } });
    fireEvent.change(fatInput, { target: { value: "100" } });
    fireEvent.change(carbsInput, { target: { value: "100" } });

    expect(screen.getByTestId("weight-1").textContent).toBe("100");
    expect(screen.getByTestId("calories-1").textContent).toBe("500");
    expect(screen.getByTestId("protein-1").textContent).toBe("50");
    expect(screen.getByTestId("fat-1").textContent).toBe("50");
    expect(screen.getByTestId("carbs-1").textContent).toBe("50");
  });

  it("calculates the macros values per 100 grams when the weight is 0", () => {
    render(<MacrosCalculator />);
    const weightInput = screen.getByTestId("weight");
    const caloriesInput = screen.getByTestId("calories");
    const proteinInput = screen.getByTestId("protein");
    const fatInput = screen.getByTestId("fat");
    const carbsInput = screen.getByTestId("carbs");

    fireEvent.change(weightInput, { target: { value: "0" } });

    expect(screen.getByTestId("weight-1").textContent).toBe("100");
    expect(screen.getByTestId("calories-1").textContent).toBe("0");
    expect(screen.getByTestId("protein-1").textContent).toBe("0");
    expect(screen.getByTestId("fat-1").textContent).toBe("0");
    expect(screen.getByTestId("carbs-1").textContent).toBe("0");
  });
});

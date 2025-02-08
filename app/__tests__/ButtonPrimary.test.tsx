import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ButtonPrimary from "../components/ui/ButtonPrimary";

describe("Button component", () => {
	it("should render button correctly", () => {
		const handleClick = jest.fn();
		render(<ButtonPrimary onClick={handleClick}>Click me</ButtonPrimary>);

		fireEvent.click(screen.getByText("Click me"));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});

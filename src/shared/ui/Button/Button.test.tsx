import {render, screen} from "@testing-library/react";
import Button from "./Button";

describe("testing button", () => {
	test("testing button1", () => {
		render(<Button>hello</Button>);
		const buttonText = screen.getByText("hello");
		expect(buttonText).toBeInTheDocument();
	});
});

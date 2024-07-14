import {render} from "@testing-library/react";
import Button, {ThemeButton} from "./Button";

describe("Testing Button.test.tsx", () => {
	test("testing default styles", () => {
		const screen = render(<Button>hello</Button>);
		const button = screen.getByText("hello");
		expect(button).toBeInTheDocument();
		expect(button).toMatchSnapshot();
	});
	describe("Testing themes", () => {
		test("testing clear theme", () => {
			const screen = render(<Button theme={ThemeButton.CLEAR}>hello</Button>);
			const button = screen.getByText("hello");
			expect(button).toBeInTheDocument();
			expect(button).toMatchSnapshot();
		});
		test("testing red theme", () => {
			const screen = render(<Button theme={ThemeButton.RED}>hello</Button>);
			const button = screen.getByText("hello");
			expect(button).toBeInTheDocument();
			expect(button).toMatchSnapshot();
		});
		test("testing small theme", () => {
			const screen = render(<Button theme={ThemeButton.SMALL}>hello</Button>);
			const button = screen.getByText("hello");
			expect(button).toBeInTheDocument();
			expect(button).toMatchSnapshot();
		});
		test("testing submit theme", () => {
			const screen = render(<Button theme={ThemeButton.SUBMIT}>hello</Button>);
			const button = screen.getByText("hello");
			expect(button).toBeInTheDocument();
			expect(button).toMatchSnapshot();
		});
	});
});

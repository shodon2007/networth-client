import {render} from "@testing-library/react";
import {Title, TitleType} from "./Title";

describe("Testing Title.test.tsx", () => {
	test("testing default styles", () => {
		const screen = render(<Title>hello</Title>);
		const title = screen.getByText("hello");
		expect(title).toBeInTheDocument();
		expect(title).toMatchSnapshot();
	});
	describe("Testing types", () => {
		test("testing middle type", () => {
			const screen = render(<Title type={TitleType.MIDDLE}>hello</Title>);
			const title = screen.getByText("hello");
			expect(title).toBeInTheDocument();
			expect(title).toMatchSnapshot();
		});
		test("testing small type", () => {
			const screen = render(<Title type={TitleType.SMALL}>hello</Title>);
			const title = screen.getByText("hello");
			expect(title).toBeInTheDocument();
			expect(title).toMatchSnapshot();
		});
		test("testing big type", () => {
			const screen = render(<Title type={TitleType.BIG}>hello</Title>);
			const title = screen.getByText("hello");
			expect(title).toBeInTheDocument();
			expect(title).toMatchSnapshot();
		});
	});
});

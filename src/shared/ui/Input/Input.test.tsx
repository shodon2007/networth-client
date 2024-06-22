import {render} from "@testing-library/react";
import Input, {InputSize} from "./Input";

describe("Testing Input.tsx", () => {
	it("should pass snapshot", () => {
		const screen = render(<Input />);
		const input = screen.getByTestId("input-parent");
		expect(input).toBeInTheDocument();
		expect(input).toMatchSnapshot();
	});
	test("Testing placeholderOutline mode", () => {
		const screen = render(<Input placeholderOutside={true} />);
		const div = screen.getByTestId("input-placeholder");
		expect(div).toBeInTheDocument();
	});
	test("Testing no placeholderOutline mode", () => {
		const screen = render(<Input placeholderOutside={false} />);
		const div = screen.queryByTestId("input-placeholder");
		expect(div).toBeNull();
	});
	describe("Testing and snapshoting input sizes", () => {
		test("Testing small input", () => {
			const smallInput = render(<Input fontSize={InputSize.small} />);
			const smallInputDom = smallInput.getByTestId("input-parent");
			expect(smallInputDom).toBeInTheDocument();
			expect(smallInputDom).toMatchSnapshot();
		});
		test("Testing small input", () => {
			const mediumInput = render(<Input fontSize={InputSize.medium} />);
			const mediumInputDom = mediumInput.getByTestId("input-parent");
			expect(mediumInputDom).toBeInTheDocument();
			expect(mediumInputDom).toMatchSnapshot();
		});
		test("Testing small input", () => {
			const bigInput = render(<Input fontSize={InputSize.big} />);
			const bigInputDom = bigInput.getByTestId("input-parent");
			expect(bigInputDom).toBeInTheDocument();
			expect(bigInputDom).toMatchSnapshot();
		});
	});
});

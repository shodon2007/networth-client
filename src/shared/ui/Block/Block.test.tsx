import {render} from "@testing-library/react";
import Block from "./Block";

describe("Testing Block.tsx", () => {
	it("should be", () => {
		const component = render(
			<Block>
				<div>shodon</div>
			</Block>,
		);
		const block = component.getByTestId("block");
		expect(block).toBeInTheDocument();
		expect(block).toMatchSnapshot();
	});
});

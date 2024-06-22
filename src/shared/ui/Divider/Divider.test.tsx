import {render} from "@testing-library/react";
import Divider from "./Divider";

describe("testing Divider.tsx", () => {
	it("should pass snapshot testing", () => {
		const screen = render(<Divider />);
		const divider = screen.getByTestId("divider");
		expect(divider).toMatchSnapshot();
	});
	it("should be in the document", () => {
		const screen = render(<Divider />);
		const divider = screen.getByTestId("divider");
		expect(divider).toBeInTheDocument();
	});
});

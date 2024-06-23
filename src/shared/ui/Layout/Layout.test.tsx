import {renderWithProviders} from "src/shared/tests";

describe("Testing Layout.tsx", () => {
	test("Snapshoting Layout", async () => {
		const screen = renderWithProviders();
		const layout = await screen.findByTestId("layout");

		expect(layout).toBeInTheDocument();
		expect(layout).toMatchSnapshot();
	});
});

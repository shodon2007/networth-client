import {renderWithProviders} from "src/shared/tests";

describe("Testing Layout.tsx", () => {
	test("Snapshoting Layout", async () => {
		const screen = renderWithProviders();
		screen.debug();
		const layout = await screen.findByTestId("layout");

		expect(layout).toBeInTheDocument();
		expect(layout).toMatchSnapshot();
	});
});

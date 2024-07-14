import {fireEvent, render} from "@testing-library/react";
import Modal from "./Modal";

describe("testing Modal.tsx", () => {
	test("snapshoting modal", () => {
		const screen = render(
			<Modal isOpen={false} close={() => false}>
				hello worlds
			</Modal>,
		);
		const modal = screen.getByTestId("modal");
		expect(modal).toMatchSnapshot();
	});
	test("testing open, close modal", () => {
		let isOpen = true;
		const getModalComponent = () => (
			<Modal isOpen={isOpen} close={() => (isOpen = !isOpen)}>
				hello worlds
			</Modal>
		);
		const screen = render(getModalComponent());
		const modal = screen.getByTestId("modal");
		expect(modal).toHaveClass("open");
		fireEvent.click(modal);
		screen.rerender(getModalComponent());
		expect(modal).not.toHaveClass("open");
		fireEvent.click(modal);
		screen.rerender(getModalComponent());
		expect(modal).toHaveClass("open");
	});
});

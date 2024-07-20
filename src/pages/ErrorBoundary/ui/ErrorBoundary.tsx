import {Component, ReactNode} from "react";

interface ErrorBoundaryState {
	error: Error;
}

interface ErrorBoundaryProps {
	children: ReactNode;
}

class ErrorBoundary extends Component {
	props: ErrorBoundaryProps;
	state: ErrorBoundaryState = {
		error: null,
	};
	static getDerivedStateFromError(error: Error) {
		return {error};
	}
	render() {
		const {error} = this.state;

		if (error) {
			return (
				<div>
					<p>{"Сорян бро, где-то ошибка появилась, мой косяк("}</p>
					<p>{error.message}</p>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

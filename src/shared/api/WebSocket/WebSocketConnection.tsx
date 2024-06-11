import useWebSocket from "react-use-websocket";

export const ws = (id: number) =>
	useWebSocket("", {
		share: true,
		queryParams: { id },
	});

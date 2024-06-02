export interface ResponseType {
	message: string;
	status: number;
}
export interface ResponseErrorType {
	data: {
		message: string;
		status: number;
	};
}

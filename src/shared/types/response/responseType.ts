export interface ResponseType<T> {
	message: string;
	status: number;
	data: T;
}

export interface ErrorResponseType {
	status: number;
	message: string;
}

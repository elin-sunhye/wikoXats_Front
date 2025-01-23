export interface ResponseDto<T> {
    status: number;
    data: T;
    msg?: string;
}
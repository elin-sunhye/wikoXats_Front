export interface responseDto<T> {
  status: number;
  body: T;
  message?: string;
}

import { AxiosError } from 'axios';

export default class RequestError {
  err: AxiosError;
  name: string;
  status?: number;
  json: Record<string, any>;
  isAxiosError: boolean;

  constructor(err: AxiosError) {
    this.err = err;
    this.name = 'RequestError';
    this.status = err.response?.status;
    this.json = err.toJSON();
    this.isAxiosError = err.isAxiosError;
  }
}

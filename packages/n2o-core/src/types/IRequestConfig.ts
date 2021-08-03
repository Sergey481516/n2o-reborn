import { AxiosRequestConfig } from 'axios';

export interface IRequestConfig extends Omit<AxiosRequestConfig, 'url'> {
  pathMapping?: Record<string, any>;
  queryString?: Record<string, any>;
}

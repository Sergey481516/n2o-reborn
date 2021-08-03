import axios, { AxiosResponse } from 'axios';

import compileUrl from '../utils/compileUrl';
import RequestError from './RequestError';

import { IRequestConfig } from '../types/IRequestConfig';

export default abstract class AbstractApiProvider {
  // TODO add default config to axios
  protected async request(
    url: string,
    { pathMapping, queryString, ...config }: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    try {
      return await axios(compileUrl(url, pathMapping, queryString), config);
    } catch (err) {
      throw new RequestError(err);
    }
  }
}

import { AxiosResponse } from 'axios';
import get from 'lodash/get';
import defaultTo from 'lodash/defaultTo';

import AbstractApiProvider from './AbstractApiProvider';
import generateUrl from '../utils/generateUrl';
import RequestError from './RequestError';

import { IRequestConfig } from '../types/IRequestConfig';

export enum CrudProviderMethod {
  GetList = 'getList',
  GetOne = 'getOne',
  UpdateOne = 'updateOne',
  UpdateMany = 'updateMany',
  CreateOne = 'createOne',
  CreateMany = 'createMany',
  DeleteOne = 'deleteOne',
  DeleteMany = 'deleteMany',
}

export type CrudPaths = {
  [key in keyof typeof CrudApiProvider]: string | null;
};

interface ICrudProviderConfig {
  path?: string;
  idPlaceholder?: string;
  crudPaths?: CrudPaths;
}

const DEFAULT_ID_PLACEHOLDER = ':id';

class CrudApiProvider extends AbstractApiProvider {
  entity: string;
  path: string;
  idPlaceholder: string;
  crudPaths?: CrudPaths;

  constructor(entity: string, config?: ICrudProviderConfig) {
    super();

    this.entity = entity;
    this.path = defaultTo(config?.path, '');
    this.idPlaceholder = defaultTo(
      config?.idPlaceholder,
      DEFAULT_ID_PLACEHOLDER,
    );
  }

  protected generateUrl(
    methodName: CrudProviderMethod,
    placeholder?: boolean,
  ): string {
    const path = get(
      this.crudPaths,
      methodName,
      placeholder ? generateUrl(this.idPlaceholder, this.path) : this.path,
    );

    return generateUrl(this.entity, path as string);
  }

  public [CrudProviderMethod.GetList](
    requestConfig: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    return this.request(this.generateUrl(CrudProviderMethod.GetList), {
      ...requestConfig,
      method: 'GET',
    });
  }

  public [CrudProviderMethod.GetOne](
    requestConfig: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    return this.request(this.generateUrl(CrudProviderMethod.GetOne), {
      ...requestConfig,
      method: 'GET',
    });
  }

  public [CrudProviderMethod.UpdateOne](
    requestConfig: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    return this.request(this.generateUrl(CrudProviderMethod.UpdateOne), {
      ...requestConfig,
      method: 'PATCH',
    });
  }

  public [CrudProviderMethod.UpdateMany](
    requestConfig: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    return this.request(this.generateUrl(CrudProviderMethod.UpdateMany), {
      ...requestConfig,
      method: 'PATCH',
    });
  }

  public [CrudProviderMethod.CreateOne](
    requestConfig: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    return this.request(this.generateUrl(CrudProviderMethod.CreateOne), {
      ...requestConfig,
      method: 'POST',
    });
  }

  public [CrudProviderMethod.CreateMany](
    requestConfig: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    return this.request(this.generateUrl(CrudProviderMethod.CreateMany), {
      ...requestConfig,
      method: 'POST',
    });
  }

  public [CrudProviderMethod.DeleteOne](
    requestConfig: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    return this.request(this.generateUrl(CrudProviderMethod.DeleteOne), {
      ...requestConfig,
      method: 'DELETE',
    });
  }

  public [CrudProviderMethod.DeleteMany](
    requestConfig: IRequestConfig,
  ): Promise<AxiosResponse | RequestError> {
    return this.request(this.generateUrl(CrudProviderMethod.DeleteMany), {
      ...requestConfig,
      method: 'DELETE',
    });
  }
}

export default CrudApiProvider;

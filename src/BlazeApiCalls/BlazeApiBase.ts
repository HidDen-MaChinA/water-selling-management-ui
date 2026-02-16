import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

export const baseClient = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

type QueryParamType = {
    [arg:string]:string
}

export interface IBlazeApiBase {
    get<K>(path: string, queryParam?: QueryParamType) : Promise<K>;
    post<K>(obj:Object, path: string) : Promise<K>;
    update<K>(obj:Object,path: string) : Promise<K>;
    delete<K>(identifier:string,path: string) : Promise<K>;
}

export class AxiosBlazeApi implements IBlazeApiBase {
  constructor(private ressource: string){ }

  get<K>(path: string, queryParam?: QueryParamType): Promise<K> {
    return baseClient
      .get(this.ressource + path, {
        params: queryParam,
      })
      .then((res) => res.data)
      .catch(() => null);
  }
  post<K>(obj: Object , path: string): Promise<K> {
    return baseClient
      .post(this.ressource + path,obj)
      .then((res) => res.data)
      .catch(() => null);
  }
  update<K>(obj: Object, path: string): Promise<K> {
    return baseClient
      .post(this.ressource + path,obj)
      .then((res) => res.data)
      .catch(() => null);
  }
  delete<K>(identifier: string, path: string): Promise<K> {
    return baseClient
      .delete(this.ressource + 
        path.charAt(path.length - 1) === "/"
          ? path + identifier
          : path + "/" + identifier
      )
      .then((res) => res.data)
      .catch(() => null);
  }
}

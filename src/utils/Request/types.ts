export interface IRESTAPIStrategy {
    get(url: string | URL, options?: RequestInit): Promise<any>;
    post(url: string | URL, data: Record<string, string>, options?: RequestInit): Promise<any>;
    put(url: string | URL, data: Record<string, string>, options?: RequestInit): Promise<any>;
    delete(url: string | URL, options?: RequestInit): Promise<any>;
  }
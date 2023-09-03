import { IRESTAPIStrategy } from "./types";

export class RESTAPIRequest {
    private strategy: IRESTAPIStrategy;

    constructor(strategy: IRESTAPIStrategy){
        this.strategy = strategy;
    }
    async get(url: string | URL, options?: RequestInit): Promise<any> {
      return this.strategy.get(url, options);
    }
  
    async post(url: string | URL, data: Record<string, string>, options?: RequestInit): Promise<any> {
      return this.strategy.post(url, data, options);
    }
  
    async put(url: string | URL, data: Record<string, string>, options?: RequestInit): Promise<any> {
      return this.strategy.put(url, data, options);
    }
  
    async delete(url: string | URL, options?: RequestInit): Promise<any> {
      return this.strategy.delete(url, options);
    }
}

export class RESTAPIRequestFetchStrategy implements IRESTAPIStrategy {
  async get(url: string | URL, options: RequestInit = {}): Promise<any> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        ...options,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in GET request:', error);
      throw error;
    }
  }

  async post(url: string | URL, data: Record<string, string>, options: RequestInit = {}): Promise<any> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in POST request:', error);
      throw error;
    }
  }

  async put(url: string | URL, data: Record<string, string>, options: RequestInit = {}): Promise<any> {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in PUT request:', error);
      throw error;
    }
  }

  async delete(url: string | URL, options: RequestInit = {}): Promise<any> {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        ...options,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in DELETE request:', error);
      throw error;
    }
  }
  }
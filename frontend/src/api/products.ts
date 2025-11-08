import client from './client';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const productsApi = {
  getAll: async () => {
    const { data } = await client.get<Product[]>('/products');
    return data;
  },

  getById: async (id: string) => {
    const { data } = await client.get<Product>(`/products/${id}`);
    return data;
  }
};
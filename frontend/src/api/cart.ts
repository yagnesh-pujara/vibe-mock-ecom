import client from './client';

export interface CartItem {
  productId: string;
  quantity: number;
}

export const cartApi = {
  getCart: async () => {
    const { data } = await client.get('/cart');
    return data;
  },

  addToCart: async (productId: string, quantity: number) => {
    const { data } = await client.post('/cart', { productId, quantity });
    return data;
  },

  updateQuantity: async (productId: string, quantity: number) => {
    const { data } = await client.put(`/cart/${productId}`, { quantity });
    return data;
  },

  removeFromCart: async (productId: string) => {
    await client.delete(`/cart/${productId}`);
  },

  clearCart: async () => {
    await client.delete('/cart');
  }
};
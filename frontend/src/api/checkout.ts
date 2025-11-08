import client from './client';

export interface CheckoutData {
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
}

export const checkoutApi = {
  processCheckout: async (checkoutData: CheckoutData) => {
    const { data } = await client.post('/checkout', checkoutData);
    return data;
  }
};
import { ProductPost } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/types";

type CartState = {
  cart: CartItem[];
  cartQuantity: number;
  addToCart: (product: ProductPost) => void;
  clearCart: () => void;
};

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      cartQuantity: 0,
      addToCart: (product: ProductPost) =>
        set((state) => {
          if (!product) {
            console.log("state tidak ada");
            return state;
          }

          const existingCartItem = state.cart.find(
            (item) => item.product.id === product.id
          );

          if (existingCartItem) {
            const updatedCart = state.cart.map((item) => {
              if (item.product.id === product.id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              } else {
                return item;
              }
            });
            return {
              cart: updatedCart,
              cartQuantity: state.cartQuantity + 1,
            };
          } else {
            return {
              cart: [...state.cart, { product, quantity: 1 }],
              cartQuantity: state.cartQuantity + 1,
            };
          }
        }),

      clearCart: () =>
        set(() => ({
          cart: [],
          cartQuantity: 0,
        })),
    }),
    {
      name: "cart-store",
    }
  )
);

export default useCartStore;

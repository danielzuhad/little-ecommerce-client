import { ProductPost } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  product: ProductPost;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  cartQuantity: number;
  addToCart: (product: ProductPost) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: "increase" | "decrease") => void;
};

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      cartQuantity: 0,
      addToCart: (product: ProductPost) =>
        set((state) => {
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

      removeFromCart: (productId: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== productId),
        })),

      updateQuantity: (productId: number, action: "increase" | "decrease") =>
        set((state) => {
          const updatedCart = state.cart.map((item) => {
            if (item.product.id === productId) {
              return {
                ...item,
                quantity:
                  action === "increase" ? item.quantity + 1 : item.quantity - 1,
              };
            }
            return item;
          });
          return { cart: updatedCart };
        }),
    }),
    {
      name: "cart-store",
    }
  )
);

export default useCartStore;

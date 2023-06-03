import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useAuthStore = create(
  devtools(
    immer((set) => ({
      isLoggedIn: [],
      isLoading: false,
      user: [],
      error: null,
      login: async (user_email, password) => {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/wristflex/login",
            {user_email, password }
          );
          if (response) {
            set({
              isLoggedIn: true,
              error: null,
              isLoading: true,
              user: response.data,
            });
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            const { error } = await response.json();
            set({ error });
          }
        } catch (error) {
          set({ isLoggedIn: false, error });
        }
      },

      signup: async (user_name, lastname, user_email, password) => {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/wristflex/",
            { user_name, lastname, user_email, password }
          );
          if (response) {
            // const[isloggedin, setisloggedin]
            set({
              isLoggedIn: true,
              user: response.data,
              isLoading: true,
              error: null,
            });
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            const { error } = await response.json();
            set({ error });
          }
        } catch (error) {
          set({ isLoggedIn: false, error: error.message });
        }
      },
      logout: () => {
        set({ user: null, isLoading: false, isLoggedIn: false });
        localStorage.removeItem("user");
      },
    }))
  )
);

export const useCartStore = create((set) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || {
    products: [],
    cartCount: 0,
  };

  return {
    products: cart.products,
    cartCount: cart.products.length,

    addToCart: (product) => {
      set((state) => {
        const updatedProducts = state.products.map((p) => {
          if (p._id === product._id) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          }
          return p;
        });

        const existingProduct = updatedProducts.find(
          (p) => p._id === product._id
        );

        if (!existingProduct) {
          updatedProducts.push({ ...product, quantity: 1 });
        }

        const cartCount = updatedProducts.length;

        localStorage.setItem(
          "cart",
          JSON.stringify({ products: updatedProducts, cartCount })
        );

        return { products: updatedProducts, cartCount };
      });
    },
    removeFromCart: (product) => {
      set((state) => {
        const updatedProducts = state.products.map((p) => {
          if (p._id === product._id && p.quantity > 0) {
            return {
              ...p,
              quantity: p.quantity - 1,
            };
          }
          return p;
        });

        const filteredProducts = updatedProducts.filter((p) => p.quantity > 0);
        const cartCount = filteredProducts.length;

        localStorage.setItem(
          "cart",
          JSON.stringify({ products: filteredProducts, cartCount })
        );

        return { products: filteredProducts, cartCount };
      });
    },

    clearCart: () => {
      localStorage.removeItem("cart");
      set({ products: [], cartCount: 0 });
    },

    increaseQuantity: (product) => {
      set((state) => {
        const updatedProducts = state.products.map((p) => {
          if (p._id === product._id) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        });
        const cartCount = updatedProducts.length;
        localStorage.setItem(
          "cart",
          JSON.stringify({ products: updatedProducts, cartCount })
        );
        return { cart: { products: updatedProducts, cartCount: state.cartCount } };
      });
    },
    decreaseQuantity: (product) => {
      set((state) => {
        const updatedProducts = state.products.map((p) => {
          if (p._id === product._id && product.quantity > 0) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        });
        localStorage.setItem(
          "cart",
          JSON.stringify({ products: updatedProducts, cartCount: state.cartCount })
        );
        return { cart: { products: updatedProducts, cartCount: state.cartCount } };
      });
    },
  };
});



import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

// Initial State
const initialState = {
  cartItems: []
};

// Reducer Function
function cartReducer(state, action) {

  switch (action.type) {

    case "ADD_TO_CART": {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, quantity: 1 }
        ]
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        )
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
}

// Provider Component
export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save cart to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(state.cartItems)
    );
  }, [state.cartItems]);

  // Calculate total price
  const totalPrice = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total quantity
  const totalItems = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook
export function useCart() {
  return useContext(CartContext);
}

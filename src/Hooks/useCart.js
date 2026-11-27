
import { useCart as useCartContext } from "../Context/CartContext";

function useCart() {
  const {
    cartItems,
    dispatch,
    totalPrice,
    totalItems
  } = useCartContext();

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    });
  };

  return {
    cartItems,
    totalPrice,
    totalItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  };
}

export default useCart;

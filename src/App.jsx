import Deserts from "./components/Deserts";
import Cart from "./components/Cart";
import { useState } from "react";
import data from "./data.json";
import { CartContext } from "./store/CartContext";

function App() {
  const items = data;
  const [cartItems, setCartItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function handleAddToCart(desert) {
    setCartItems((prevState) => {
      const itemExists = prevState.find((element) => element.id === desert.id);

      if (itemExists) {
        return prevState.map((item) =>
          item.id === desert.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevState, { ...desert, quantity: 1 }];
    });
  }

  function handleDeleteFromCart(desert) {
    setCartItems((prevState) =>
      prevState
        .map((item) =>
          item.id === desert.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function handleClearItemFromCart(desert) {
    setCartItems((prevState) =>
      prevState.filter((item) => item.id !== desert.id)
    );
  }

  function handleStartNewOrder() {
    setCartItems([]);
    setOpenModal(false);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  return (
    <div className="app">
      <CartContext.Provider
        value={{
          items,
          cartItems,
          openModal,
          handleAddToCart,
          handleDeleteFromCart,
          setCartItems,
          handleClearItemFromCart,
          handleStartNewOrder,
          handleOpenModal,
        }}
      >
        <Deserts />
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

export default App;

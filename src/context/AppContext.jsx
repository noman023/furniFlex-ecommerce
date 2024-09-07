import { createContext, useState, useEffect } from "react";

// Create the context
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // get user if available
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // get cart items if available
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    // fetch products
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=10");
      const data = await res.json();

      setProducts(data);
    };

    fetchProducts();

    setLoading(false);
  }, []);

  // Calculate total price whenever cartItems changes
  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);

  const login = (userData) => {
    // check if user already sign in
    if (user) {
      return alert("You've already sign in. Please logout first!.");
    }

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to sign out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Function to add product to cartItems/localstorage
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]); // add quantity

    // get cart from localStorage or initialize it as an empty array
    const storedCartItems = localStorage.getItem("cart");
    const cartArray = storedCartItems ? JSON.parse(storedCartItems) : [];

    cartArray.push(product);
    localStorage.setItem("cart", JSON.stringify(cartArray));
  };

  // Function to remove product from cartItems/localstorage
  const deleteFromCart = (id) => {
    // filter by id and update state
    const filteredState = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredState);

    // update localstorage
    localStorage.setItem("cart", JSON.stringify(filteredState));
  };

  // function to update item's quantity
  const updateCartItemQuantity = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    // update state
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        products,
        cartItems,
        addToCart,
        deleteFromCart,
        totalPrice,
        updateCartItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

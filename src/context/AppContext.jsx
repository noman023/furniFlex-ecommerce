import { createContext, useState, useEffect } from "react";

// Create the context
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  // Function to log in the user
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

  // Function to add product to cartItems
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);

    // get cart from localStorage or initialize it as an empty array
    const storeCartItems = localStorage.getItem("cart");
    const cartArray = storeCartItems ? JSON.parse(storeCartItems) : [];

    cartArray.push(product);
    localStorage.setItem("cart", JSON.stringify(cartArray));
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useState, useEffect } from "react";

// Create the context
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // get user if available
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
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
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to sign out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AppContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        products,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts } from "@/services/api";
import { ReactNode } from "react";

interface Product {
  id: string;
  status: string;
  title: string;
  welcome_title: string;
  welcome_phrase: string;
  logo_url: string;
  background_color: string;
  button_color: string;
  items: Array<{
    customer_product_id: string;
    name: string;
    quantity: number;
    optional: boolean;
    image_url: string;
    sizes_grid: { name: string } | null;
    sizes: Array<{ id: string; name: string }>;
  }>;
  extra_questions: Array<{
    id: number;
    answer_type: string;
    question: string;
    position: number;
    options: string[];
  }>;
}

interface AppContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType>({
  products: [],
  loading: true,
  error: null,
  selectedItems: [],
  setSelectedItems: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <AppContext.Provider
      value={{ products, loading, error, selectedItems, setSelectedItems }}
    >
      {children}
    </AppContext.Provider>
  );
};

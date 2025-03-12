import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts } from "@/services/fetch-products";
import { ReactNode } from "react";
import { Product } from "@/types/types";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
        router.push("/error");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [router]);

  return (
    <AppContext.Provider
      value={{ products, loading, error, selectedItems, setSelectedItems }}
    >
      {children}
    </AppContext.Provider>
  );
};

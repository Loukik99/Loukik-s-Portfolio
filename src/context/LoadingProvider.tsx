import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);
  const isHome = useLocation().pathname === "/";

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  // The loading screen + entrance animation is driven by the home-only 3D
  // character. On any other route there is nothing to complete it, so dismiss
  // it immediately and make the page scrollable to avoid a stuck loader.
  useEffect(() => {
    if (!isHome) {
      setIsLoading(false);
      document.body.style.overflowY = "auto";
    }
  }, [isHome]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && isHome && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

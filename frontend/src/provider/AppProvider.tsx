import { createContext, useContext, useState } from "react";
import { Account, Auth } from "../types/Account";

interface AppContextProps {
  account: Account | null;
  setAccount: React.Dispatch<React.SetStateAction<Account | null>>;
  auth: Auth | null;
  setAuth: React.Dispatch<React.SetStateAction<Auth | null>>;
}

const Context = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider = ({ children }: { children: any }) => {
  const [account, setAccount] = useState<Account | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);

  return (
    <Context.Provider
      value={{
        account,
        setAccount,
        auth,
        setAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppProvider = () => useContext(Context);

import { createContext, useContext, useEffect, useState } from "react";
import { Account, Auth } from "../types/Account";
import ActionCable from "actioncable";
import { ToastContainer, toast } from "react-toastify";
import { Movie } from "../types/Movie";

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

  useEffect(() => {
    const cable = ActionCable.createConsumer(
      `${process.env.REACT_APP_WS_URL}/cable`
    );
    cable.subscriptions.create(
      { channel: "MoviesChannel" },
      {
        received: (movie: Movie) => {
          toast(
            `The video ${movie.link} has just been shared by user ${movie.user.email}.`
          );
        },
      }
    );
  }, []);

  return (
    <Context.Provider
      value={{
        account,
        setAccount,
        auth,
        setAuth,
      }}
    >
      <ToastContainer />
      {children}
    </Context.Provider>
  );
};

export const useAppProvider = () => useContext(Context);

import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState<null | boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
    });

    const fetchInitialStatus = async () => {
      const state = await NetInfo.fetch();
      setIsOnline(state.isConnected);
    };

    fetchInitialStatus();

    return () => unsubscribe();
  }, []);

  return { isOnline };
};

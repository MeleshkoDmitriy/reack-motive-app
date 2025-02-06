import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import {
  TAsyncStorageKeys,
  TAsyncStorageValue,
} from "@/types/AsyncStorageTypes";

interface useAsyncStorageProps<K extends TAsyncStorageKeys> {
  key: K;
  initialValue: TAsyncStorageValue<K>;
}
export const useAppAsyncStorage = <K extends TAsyncStorageKeys>({
  key,
  initialValue,
}: useAsyncStorageProps<K>) => {
  const [value, setValue] = useState<TAsyncStorageValue<K>>(initialValue);

  useEffect(() => {
    const getItem = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        if (item !== null) {
          setValue(JSON.parse(item));
        } else {
          setValue(initialValue);
        }
      } catch (error) {
        Alert.alert("Error reading value from AsyncStorage");
      }
    };

    getItem();
  }, [key, initialValue]);

  useEffect(() => {
    const storeItem = async () => {
      try {
        const item = JSON.stringify(value);
        await AsyncStorage.setItem(key, item);
      } catch (error) {
        Alert.alert("Error saving value to AsyncStorage");
      }
    };

    storeItem();
  }, [value, key]);

  return [value, setValue] as const;
};

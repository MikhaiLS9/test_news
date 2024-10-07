import { EUseLocalStorage } from "../interfaces/enum";

export const useLocalStorage = (key: EUseLocalStorage) => {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {
    const item = window.localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };



  return { setItem, getItem, removeItem };
};

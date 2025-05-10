import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type LocalStorageStateHook<T> = [T, Dispatch<SetStateAction<T>>];

export function useLocalStorageState<T>(initialState: T, key: string): LocalStorageStateHook<T> {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

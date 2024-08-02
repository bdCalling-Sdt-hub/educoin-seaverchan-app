import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
export const FontSize = (size : number) => size / fontScale;

import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const setStorageToken = (token: string) => {
  storage.set('token', token);
};

export const getStorageToken = () => {
  return storage.getString('token');
};

export const removeStorageToken = () => {
  storage.delete('token');
};

import { Dimensions, PixelRatio } from "react-native";


const {height,width} = Dimensions.get("screen");

const fontScale = PixelRatio.getFontScale();
export const FontSize = (size : number) => size / fontScale;

export const isTablet = (): boolean => {
  const aspectRatio = height / width;
  // A common rule is to classify devices with width >= 600 dp as tablets
  return width >= 600 && aspectRatio < 1.6; // Tablets generally have an aspect ratio below 1.6
};

export const isSmallDevice = (): boolean => {
  return width < 360;
};

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

export const setStorageRole = (role: string) => {
  storage.set('role', role);
};

export const getStorageRole = () => {
  return storage.getString('role');
};

export const removeStorageRole = () => {
  storage.delete('role');
};



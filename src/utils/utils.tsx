import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
export const FontSize = (size : number) => size / fontScale;


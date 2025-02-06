import { selectTheme } from "@/store/slices/themeSlice";
import { useAppSelector } from "./reduxHooks";
import { getThemeStyles } from "@/styles/themeStyles";

export const useAppTheme = () => {
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return themeStyles
};

import { AppSafeAriaView } from "@/components/AppSafeAriaView";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { Navigation } from "@/navigation/Navigation";
import { loadThemeFromStorage } from "@/store/slices/themeSlice";
import store from "@/store/store";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <AppSafeAriaView>
        <Navigation />
      </AppSafeAriaView>
    </Provider>
  );
}

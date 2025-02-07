import { AppSafeAriaView } from "@/components/AppSafeAriaView";
import { Navigation } from "@/navigation/Navigation";
import store from "@/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppSafeAriaView>
          <Navigation />
        </AppSafeAriaView>
      </Provider>
    </GestureHandlerRootView>
  );
}

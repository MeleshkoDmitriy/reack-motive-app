import { AppSafeAriaView } from "@/components/AppSafeAriaView";
import { Navigation } from "@/navigation/Navigation";
import store from "@/store/store";
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

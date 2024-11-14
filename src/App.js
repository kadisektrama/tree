import { Provider } from "react-redux";
import { App } from "./components/app";
import { store } from "./redux/store";

function RootApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default RootApp;

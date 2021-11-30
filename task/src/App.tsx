import { Main } from "./components/pages/Main";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./styles/index.scss";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;

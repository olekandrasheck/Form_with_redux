import "./App.css";
import { Form } from "./Form";
import { List } from "./List";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="main-wrapper">
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;

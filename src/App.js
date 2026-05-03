import { Provider } from "react-redux";
import Body from "./component/Body";
import Header from "./component/Header";
import SiderBar from "./component/SiderBar";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex pt-14">
        <SiderBar />
        <div className="ml-56 flex-1">
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;

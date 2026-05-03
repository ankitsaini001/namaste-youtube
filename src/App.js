import Body from "./component/Body";
import Header from "./component/Header";
import SiderBar from "./component/SiderBar";

function App() {
  return (
    <div>
      <Header />
      <div className="flex pt-14">
        <SiderBar />
        <div className="ml-56 flex-1">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;

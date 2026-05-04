import { Provider, useSelector } from "react-redux";
import Body from "./component/Body";
import BodyMenuBar from "./component/BodyMenuBar";
import Header from "./component/Header";
import SiderBar from "./component/SiderBar";
import store from "./utils/store";
import NotFound from "./component/NotFound";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function AppLayout() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
      <Header />
      <div className="flex pt-14 h-screen">
        <SiderBar />
        <div className={`flex-1 min-w-0 flex flex-col transition-all duration-300 ${isMenuOpen ? "ml-56" : "ml-0"}`}>
          <BodyMenuBar />
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

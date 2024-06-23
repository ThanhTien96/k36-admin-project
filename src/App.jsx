import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainTemplate from "./template/MainTemplate";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";
import PAGE_PATH from "./constant/pagePath";
import SingupPage from "./pages/SingupPage";
import MessageProvider from "./components/provider/MessageProvider";
import LoginPage from "./pages/LoginPage";
import PriviateRoute from "./HOC/PriviateRoute";
import { Provider } from "react-redux";
import store from "./store";
import HelmetProvider from "./components/provider/HelmetProvider";
import { App as AppProvider } from "antd";

function App() {
  return (
   <AppProvider >
     <Provider store={store}>
      <HelmetProvider>
        <MessageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<MainTemplate />}>
                <Route
                  index
                  path={PAGE_PATH.home}
                  element={
                    <PriviateRoute
                      element={<PriviateRoute components={HomePage} isAuth={true} />}
                      isAuth={true}
                      path={PAGE_PATH.login}
                    />
                  }
                />
                <Route
                  path={PAGE_PATH.user}
                  element={
                    <PriviateRoute
                      path={PAGE_PATH.login}
                      isAuth={true}
                      components={UserPage}
                    />
                  }
                />
                <Route path="*" Component={ErrorPage} />
              </Route>

              {/* auth page */}
              <Route path={PAGE_PATH.singup} Component={SingupPage} />
              <Route path={PAGE_PATH.login} Component={LoginPage} />
            </Routes>
          </BrowserRouter>
        </MessageProvider>
      </HelmetProvider>
    </Provider>
   </AppProvider>
  );
}

export default App;

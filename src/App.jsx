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
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import HelmetProvider from "./components/provider/HelmetProvider";
import { App as AppProvider } from "antd";
import { useEffect } from "react";
import { setAuthProfile } from "./store/app/authSlice";

function App() {
  
  
  const dispatch = useDispatch();

  useEffect(() => {
    const profileLocal = JSON.parse(localStorage.getItem("profile"));
    if(profileLocal) {
      dispatch(setAuthProfile(profileLocal));
    }
  },[]);

  return (
   <AppProvider >
      <HelmetProvider>
        <MessageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<PriviateRoute components={<MainTemplate />} />}>
                <Route
                  index
                  path={PAGE_PATH.home}
                  element={
                    <PriviateRoute components={<HomePage />} />
                  }
                />
                <Route
                  path={PAGE_PATH.user}
                  element={
                    <PriviateRoute
                      isAdmin={true}
                      components={<UserPage />}
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
   </AppProvider>
  );
}

export default App;

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

function App() {
  return (
    <MessageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PriviateRoute components={<MainTemplate />} isAuth={true} />}>
            <Route index path={PAGE_PATH.home} Component={HomePage} />
            <Route path={PAGE_PATH.user} Component={UserPage} />
            <Route path="*" Component={ErrorPage} />
          </Route>

          {/* auth page */}
          <Route path={PAGE_PATH.singup} Component={SingupPage} />
          <Route path={PAGE_PATH.login} Component={LoginPage} />

        </Routes>
      </BrowserRouter>
    </MessageProvider>
  );
}

export default App;

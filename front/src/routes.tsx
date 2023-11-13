import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { ModuleNavigate } from "./constants/routes";
import Store from "./pages/store";
import Main from "./templates/main";
// import Main from "./components/main";

export default function RoutesApp() {
  const token = Cookies.get("copafer.token");
  // const { isAuthenticated, signOut } = useContext(AuthContext);
  // const locationRoutes = useLocationRoutes();
  // // useScript('https://documentcloud.adobe.com/view-sdk/viewer.js')


  // useEffect(() => {
  //   if (!isAuthenticated && !token) signOut();
  // }, [isAuthenticated]);

  return (
    <Routes>
      {/* <Route path="/" element={<AuthView />} /> */}
      <Route
        path={ModuleNavigate.store}
        element={
          <Store />
        }
      />
      <Route
        path={ModuleNavigate.settings}
        element={
          <>
          </>
          // <Main>
            // <Settings />
          // </Main>
          // <Store />
        }
      />
    </Routes>
  );
}

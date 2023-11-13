import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MainProvider } from "./contexts/MainContext";
import { LocationProvider } from "./contexts/LocationContext";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { GlobalAlertProvider } from "./contexts/GlobalAlertsContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <MainProvider>
            <LocationProvider>
              <GlobalAlertProvider>
                <AuthProvider>
                  <RoutesApp />
                </AuthProvider>
              </GlobalAlertProvider>
            </LocationProvider>
          </MainProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
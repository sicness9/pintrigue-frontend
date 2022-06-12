import { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Main from "./components/Main/Main";
import SignedInUserHome from "./components/SignedInUserHome/SignedInUserHome";
import PinBuilder from "./components/PinBuilder/PinBuilder";
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
import PinView from "./components/PinView/PinView";

// context
import SuggestionContextProvider from "./Context/SuggestionContext";
import CreatePinContextProvider from "./Context/newPinContext";
import UserProvider, { UserContext } from "./Context/userContext";

// styles
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const authed = useContext(UserContext);

  return (
    <div className="App">
      <Router>
        <UserProvider>
          <CreatePinContextProvider>
            <SuggestionContextProvider>
              <Routes>
                <Route path="/" element={<Main />} />
                {authed && (
                  <Route
                    path="/user-home"
                    element={<SignedInUserHome />}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                  />
                )}
                {authed && (
                  <Route path="/pin-builder" element={<PinBuilder />} />
                )}
                {authed && (
                  <Route path="/search/pins" element={<SearchResultPage />} />
                )}
                {authed && <Route path="/pin/:id" element={<PinView />} />}
              </Routes>
            </SuggestionContextProvider>
          </CreatePinContextProvider>
          <GlobalStyles />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;

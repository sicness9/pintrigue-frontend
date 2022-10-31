import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Main from "./components/Main/Main";
import SignedInUserHome from "./components/SignedInUserHome/SignedInUserHome";
import PinBuilder from "./components/PinBuilder/PinBuilder";
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
import PinView from "./components/PinView/PinView";
import UnauthedView from "./components/UnauthedView/UnauthedView";
import AuthedHeader from "./components/AuthedHeader/AuthedHeader";
import Header from "./components/Header/Header";
import RequireAuth from "./components/RequireAuth";

// context
import SuggestionContextProvider from "./Context/SuggestionContext";
import CreatePinContextProvider from "./Context/newPinContext";

// styles
import { GlobalStyles } from "./GlobalStyles";

// state management

function App() {
  const authed = useSelector((state) => state.authed.value);

  return (
    <div className="App">
      <CreatePinContextProvider>
        <SuggestionContextProvider>
          {authed ? <AuthedHeader /> : <Header />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/unauthed-view" element={<UnauthedView />} />
            {/* Protected routes*/}
            <Route element={<RequireAuth />}>
              <Route path="/user-home" element={<SignedInUserHome />} />
              <Route path="/user-home" element={<UnauthedView />} />
              <Route path="/pin-builder" element={<PinBuilder />} />
              <Route path="/search/pins" element={<SearchResultPage />} />
              <Route path="/pin/:id" element={<PinView />} />
            </Route>
          </Routes>
        </SuggestionContextProvider>
      </CreatePinContextProvider>
      <GlobalStyles />
    </div>
  );
}

export default App;

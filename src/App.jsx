import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Main from "./pages/LandingPage/Main/Main";
import SignedInUserHome from "./pages/UserHomePage/SignedInUserHome/SignedInUserHome";
import PinBuilder from "./pages/AddPinPage/PinBuilder/PinBuilder";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage/SearchResultPage";
import PinView from "./pages/ViewPinPage/PinView/PinView";
import UnauthedView from "./pages/UnauthedPage/UnauthedView/UnauthedView";
import AuthedHeader from "./UI/navigation/AuthedHeader/AuthedHeader";
import Header from "./UI/navigation/Header/Header";
import RequireAuth from "./components/RequireAuth";
import ProfileSettings from "./pages/SettingsPage/ProfileSettings/ProfileSettings";

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
            {/* <Route path="/settings/edit-profile" element={<EditProfile />} /> */}
            {/* Protected routes*/}
            <Route element={<RequireAuth />}>
              <Route path="/settings/" element={<ProfileSettings />} />
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

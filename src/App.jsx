import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Main from "./components/mainPage/Main/Main";
import SignedInUserHome from "./components/users/SignedInUserHome/SignedInUserHome";
import PinBuilder from "./components/pins/PinBuilder/PinBuilder";
import SearchResultPage from "./components/miscPages/SearchResultPage/SearchResultPage";
import PinView from "./components/pins/PinView/PinView";
import UnauthedView from "./components/miscPages/UnauthedView/UnauthedView";
import AuthedHeader from "./components/navbar/AuthedHeader/AuthedHeader";
import Header from "./components/navbar/Header/Header";
import RequireAuth from "./components/RequireAuth";
import ProfileSettings from "./components/userSettings/ProfileSettings/ProfileSettings";

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

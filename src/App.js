import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AuthedHeader from "./components/AuthedHeader/AuthedHeader";
import SignedInUserHome from "./components/SignedInUserHome/SignedInUserHome";

// styles
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        {/* <AuthedHeader /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/user_home"
            element={<SignedInUserHome />}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Routes>
        <GlobalStyles />
      </Router>
    </div>
  );
}

export default App;

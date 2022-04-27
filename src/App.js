import { useState } from "react";

// components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

// styles
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Main />
    </div>
  );
}

export default App;

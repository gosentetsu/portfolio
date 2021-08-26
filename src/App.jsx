import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const ThemeContext = React.createContext(function (toggleActive) {
  console.log("ThemeContext:" + toggleActive);
});
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={theme}>
      <ThemeContext.Provider
        value={function (isActive) {
          console.log("provider:" + isActive);
          setTheme(isActive ? "dark" : "light");
        }}
      >
        <Router>
          <div className="dark:bg-gray-700 flex flex-col min-h-screen justify-between static transition">
            <div>
              <Nav />
            </div>
            <div className="block">
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/gallery">
                  <div className="flex-auto">
                    <Gallery />
                  </div>
                </Route>
              </Switch>
            </div>

            <div>
              <Footer />
            </div>
          </div>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

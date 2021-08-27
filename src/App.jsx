import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const ThemeContext = React.createContext();
function App() {
  const isMatched = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(isMatched ? "dark" : "light");
  return (
    <div className={theme}>
      <ThemeContext.Provider
        value={{
          theme: theme,
          themeCallback: function (isActive) {
            setTheme(isActive ? "dark" : "light");
          },
        }}
      >
        <Router>
          <div className="dark:bg-gray-700 flex flex-col min-h-screen justify-between static transition">
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/gallery">
                <div className="flex-1">
                  <Gallery />
                </div>
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

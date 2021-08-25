import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";

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
        <div className="dark:bg-gray-600 flex flex-col justify-between h-screen transition">
          <Nav></Nav>
          <Home></Home>
          <Footer></Footer>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

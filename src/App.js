import React, { useState } from 'react';
import './App.css';
export const AuthContext = React.createContext(null);

function App() {
  const [loggedIn, setLoggedIn] = useState({
    isLoggedIn: false,
    user: null
  });

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
        <div id="App" className="html">
          {/* <Footer/> */}
        </div>
    </AuthContext.Provider>

  );
}
export default App

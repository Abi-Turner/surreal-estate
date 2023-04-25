import "../styles/app.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (userId) => {
    setUserID(userId);
  };

  const handleLogout = () => {
    window.FB.logout(() => setUserID(""));
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <Routes>
        <Route path="/properties" element={<Properties userID={userID} />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route
          path="/saved-properties"
          element={<SavedProperties userID={userID} />}
        />
        <Route path="/*" element={<Properties userID={userID} />} />
      </Routes>
    </div>
  );
};

export default App;

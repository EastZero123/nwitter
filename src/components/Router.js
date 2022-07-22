import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
      <Route />
    </Routes>
  );
};

export default AppRouter;

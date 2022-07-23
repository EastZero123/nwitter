import { Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "./Profile";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <>
      {isLoggedIn && <Navigation userObj={userObj} />}

      <div
        style={{
          maxWidth: 890,
          width: "100%",
          margin: "0 auto",
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home userObj={userObj} />} />
              <Route
                path="/profile"
                element={
                  <Profile userObj={userObj} refreshUser={refreshUser} />
                }
              />
            </>
          ) : (
            <Route path="/" element={<Auth />} />
          )}
        </Routes>
      </div>
    </>
  );
};

export default AppRouter;

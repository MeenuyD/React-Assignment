import React,{useState,useEffect,useContext} from "react";
import { LOGO } from "./utils.js/Confige";
import { Link } from "react-router-dom";
import useOnline from "./utils.js/useOnline";
import UserContext from "./utils.js/UserContext";
const Title = () => {
  return (
    <a href="/">
      <img
      data-testid="logo"
        className="h-28 p-2 sm:bg-center"
        alt="logo"
        src={LOGO}
      ></img>
    </a>
  );
  };
  const Header = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const isOnline=useOnline();
    
      const {user}=useContext(UserContext);

  return (
    <>
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 lg:bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline? "✅":"🔴"}</h1>
      <span className="span">{user.name}-{user.email}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
    </>
  )
}

export default Header;
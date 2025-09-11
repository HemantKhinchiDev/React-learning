// components/Profile.js
import { useContext } from "react";
import { UserContext } from "../../contexts/MyContext";
export const Day10 = () => {
  // useContext का इस्तेमाल करके सीधे data को access करें
  const userData = useContext(UserContext);

  return (
    <div>
      {userData.isLoggedIn ? (
        <h1>Welcome, {userData.name}!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
};

import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <p>No User. Please Login!!!</p>;

  return <h1>Hello {user.username},</h1>;
};

export default Profile;

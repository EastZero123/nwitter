import { authService, dbService } from "../fbase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

const Profile = ({ userObj, refreshUser }) => {
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
      refreshUser();
    }
  };

  // const getMyNweets = async () => {
  //   const q = query(
  //     collection(dbService, "nweets"),
  //     where("creatorId", "==", `${userObj.uid}`),
  //     orderBy("createdAt", "desc")
  //   );
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, "=>", doc.data());
  //   });
  // };

  // useEffect(() => {
  //   getMyNweets();
  // }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <button onClick={onLogOutClick}>Log Out</button>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
    </>
  );
};

export default Profile;


import { useParams } from "react-router-dom";
import Cricket from "./Cricket";
import Football from "./Football";

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "Cricket" ? (
        <Cricket />
      ) : name === "Football" ? (
        <Football />
      ) : (
        <p>Cannot find requested item</p>
      )}
    </div>
  );
};

export default Profile;

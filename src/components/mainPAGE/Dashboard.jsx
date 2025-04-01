import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseauth/Firebase";
import Landing from "./Landing";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/complprofile");
  };

  return (
    
     
      <Landing />
  )

   
 
}

export default Dashboard;

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseauth/Firebase";
import MakeProfile from "../profilecreation/makeprofile";
import Landing from "./Landing";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
    <section>
       
       

      <MakeProfile/>
      
      

      
      
    </section>
    </>
  );
}

export default Dashboard;
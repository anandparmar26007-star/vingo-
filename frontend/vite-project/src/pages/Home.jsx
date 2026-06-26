import UserDashboard from '../Component/UserDashboard';
import OwnerDashboard from '../Component/OwnerDashboard';
import Deliveryboy from '../Component/Deliveryboy';
import Nav from '../Component/Nav';
import { useSelector } from 'react-redux';
function Home() {
  const userData = useSelector((state) => state.auth?.userData);
   console.log("userData =", userData);

  const role = userData?.role;
  if (!userData) {
    return (
      <div >
      <Nav/>
      </div>
    );
  }

  return (
  <>
    
        {role === "user" && <UserDashboard />}
      {((role === "owner" || role === "admin")) && <OwnerDashboard />}
        {role === "deliveryboy" && <Deliveryboy />}
 
    {!["user", "owner","admin", "deliveryboy"].includes(role) && (
        <p>Invalid user role detected.</p>
      )}
  </>
  )
}
export default Home;
 
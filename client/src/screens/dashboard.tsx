import { authClient } from "@/lib/auth-client";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const session = authClient.useSession();
  const navigate = useNavigate();

  if (!session) {
    
    navigate("/auth/signin");
  }

  return <div>Dashborad screen</div>;
};

export default Dashboard;

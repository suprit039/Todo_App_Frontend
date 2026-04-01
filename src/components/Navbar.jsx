import { Button } from "./ui/button";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between p-4 bg-gray-100">
      <h1 className="font-bold">Todo App</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
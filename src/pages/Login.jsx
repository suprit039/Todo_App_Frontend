import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { getUsers, setCurrentUser } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = getUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    setCurrentUser(user);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="p-6 w-80">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Login</h2>
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Button className="w-full" onClick={handleLogin}>Login</Button>
          <p className="text-sm text-center">Don't have an account? <Link to="/signup" className="underline">Sign up</Link></p>
        </CardContent>
      </Card>
    </div>
  );
}
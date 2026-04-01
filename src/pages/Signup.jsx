import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { getUsers, saveUsers } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      alert("An account with this email already exists");
      return;
    }

    users.push({ email, password });
    saveUsers(users);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="p-6 w-80">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Signup</h2>
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Button className="w-full" onClick={handleSignup}>Signup</Button>
          <p className="text-sm text-center">Already have an account? <Link to="/login" className="underline">Login</Link></p>
        </CardContent>
      </Card>
    </div>
  );
}
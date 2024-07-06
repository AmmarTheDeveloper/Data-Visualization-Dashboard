import Link, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  function handler(e) {
    e.preventDefault();
    let { email, password } = e.target;
    if (email.value === "admin@gmail.com" && password.value === "admin123") {
      localStorage.setItem("email", "admin@gmail.com");
      toast({
        title: "Logged in successfully.",
      });
      navigate("/dashboard");
    } else {
      return toast({
        title: "Enter valid email and password.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[400px] max-w-full shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-sm text-center">
            email : admin@gamil.com <br /> password : admin123
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handler} className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex flex-items-center">
                <Label htmlFor="email">Email</Label>
              </div>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                name="email"
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

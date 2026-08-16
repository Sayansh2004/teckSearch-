import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import{LuEye,LuEyeOff} from "react-icons/lu"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function CardDemo() {
  const [isLogin,setIsLogin] = useState(true);
  const[showPassword,setShowPassword] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
       <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="flex">
               <Input id="password" type={showPassword?"text":"password"} placeholder="••••••••" required />
               {showPassword ? <LuEyeOff className="ml-2 mt-2 hover:cursor-pointer" onClick={()=>setShowPassword(false)}/> : <LuEye className="ml-2 mt-2 hover:cursor-pointer" onClick={()=>setShowPassword(true)}/>}
             </div>
             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full hover:cursor-pointer">
          Login
        </Button>
        <Button variant="outline" className="w-full hover:cursor-pointer">
          <FcGoogle className="mr-2 h-4 w-4" />
          continue with Google
        </Button>
      </CardFooter>
      <div>
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account? <CardAction>
          <Button variant="link" className="hover:cursor-pointer">Sign Up</Button>
        </CardAction>
        </p>
      </div>
    </Card>

    </div>
   
  )
}

import { NavLink } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            T
          </div>
          <span className="text-lg font-semibold tracking-tight">
            TechoBridge
          </span>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Profile popover */}
        <Popover>
          <PopoverTrigger className="rounded-full ring-offset-background transition-shadow hover:ring-2 hover:ring-primary/50 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatar-placeholder.png" alt="Profile" />
              <AvatarFallback>TB</AvatarFallback>
            </Avatar>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-64 p-0">
            <div className="p-4">
              <p className="text-sm font-semibold">Edit Profile</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Manage your account settings
              </p>
            </div>

            <Separator />

            <div className="p-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">
                  Subscription Tier
                </span>
                <Badge variant="secondary" className="w-fit">
                  Basic
                </Badge>
              </div>
            </div>

            <Separator />

            <div className="p-3">
              <Button size="sm" className="w-full">
                Edit
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
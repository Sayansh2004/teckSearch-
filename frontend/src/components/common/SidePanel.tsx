import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Compass,
  Globe,
  FileSearch,
  BarChart3,
  Box,
  Sparkles,
  Database,
  PlayCircle,
  Shield,
  ShieldOff,
  Network,
  Zap,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

type NavItem = {
  label: string;
  to: string;
  icon: React.ElementType;
};

type NavSection = {
  title?: string;
  items: NavItem[];
};

const sections: NavSection[] = [
  {
    items: [
      { label: "Account home", to: "/", icon: Home },
      { label: "Recents", to: "/recents", icon: Compass },
      { label: "Domains", to: "/domains", icon: Globe },
    ],
  },
  {
    title: "Observe",
    items: [
      { label: "Investigate", to: "/investigate", icon: FileSearch },
      { label: "Analytics", to: "/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Build",
    items: [
      { label: "Compute", to: "/compute", icon: Box },
      { label: "AI", to: "/ai", icon: Sparkles },
      { label: "Storage & databases", to: "/storage", icon: Database },
      { label: "Media", to: "/media", icon: PlayCircle },
    ],
  },
  {
    title: "Protect & connect",
    items: [
      { label: "Application security", to: "/app-security", icon: Shield },
      { label: "Zero Trust", to: "/zero-trust", icon: ShieldOff },
      { label: "Networking", to: "/networking", icon: Network },
      { label: "Delivery & performance", to: "/delivery", icon: Zap },
    ],
  },
];

export default function SidePanel() {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);

  const expanded = pinned || hovered;

  return (
    <TooltipProvider delayDuration={100}>
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`sticky top-16 h-[calc(100vh-4rem)] shrink-0 border-r bg-background transition-all duration-200 ease-in-out ${
          expanded ? "w-64" : "w-16"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Toggle */}
          <div
            className={`flex items-center h-12 px-3 ${
              expanded ? "justify-end" : "justify-center"
            }`}
          >
            <button
              onClick={() => setPinned((p) => !p)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              {pinned ? (
                <PanelLeftClose className="h-4 w-4" />
              ) : (
                <PanelLeftOpen className="h-4 w-4" />
              )}
            </button>
          </div>

          <Separator />

          {/* Nav sections */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden py-3 px-2 space-y-4">
            {sections.map((section, i) => (
              <div key={i} className="space-y-1">
                {section.title && expanded && (
                  <p className="px-3 pb-1 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {section.title}
                  </p>
                )}
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const linkContent = (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        } ${expanded ? "" : "justify-center"}`
                      }
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {expanded && (
                        <span className="truncate whitespace-nowrap">
                          {item.label}
                        </span>
                      )}
                    </NavLink>
                  );

                  return expanded ? (
                    <div key={item.to}>{linkContent}</div>
                  ) : (
                    <Tooltip key={item.to}>
                      <TooltipTrigger className="w-full block">
                        {linkContent}
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            ))}
          </nav>

          <Separator />

          {/* Manage account pinned at bottom */}
          <div className="p-2">
            {expanded ? (
              <NavLink
                to="/manage-account"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <Settings className="h-4 w-4 shrink-0" />
                <span>Manage account</span>
              </NavLink>
            ) : (
              <Tooltip>
                <TooltipTrigger className="w-full block">
                  <NavLink
                    to="/manage-account"
                    className="flex items-center justify-center rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <Settings className="h-4 w-4 shrink-0" />
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right">Manage account</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
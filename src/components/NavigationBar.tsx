import { Button } from "@/components/ui/button";
import { User, LogOut, Menu, Home, BarChart3, Settings, FileText } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationBarProps {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export function NavigationBar({ title = "SMART LOGISTICS", showBackButton = false, onBack }: NavigationBarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: "Dashboard", path: "/", icon: Home },
    { label: "In-Plant Logistics", path: "/in-plant-logistics", icon: BarChart3 },
    { label: "IOT Hub", path: "/iot-hub", icon: Settings },
    { label: "Reporting", path: "/reporting", icon: FileText },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="bg-blue-100 border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Top Row - Main Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            {showBackButton && onBack && (
              <Button variant="ghost" size="sm" onClick={onBack}>
                <Menu className="h-4 w-4" />
              </Button>
            )}
            <span className="text-blue-600 font-semibold text-lg">{title}</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="bg-white text-slate-600 hover:bg-gray-50">
              <User className="h-4 w-4 mr-2" />
              USER
            </Button>
            <Button variant="ghost" className="bg-blue-900 text-white hover:bg-blue-800">
              <LogOut className="h-4 w-4 mr-2" />
              LOGOUT
            </Button>
          </div>
        </div>

        {/* Bottom Row - Navigation */}
        <div className="flex items-center gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                size="sm"
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-2 ${
                  isActive(item.path) 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
import { User, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title?: string;
  showBreadcrumb?: boolean;
}

export function Header({ title = "Logistics", showBreadcrumb = false }: HeaderProps) {
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Dashboard", path: "/" },
    { name: "In-Plant Logistics", path: "/in-plant-logistics" },
    { name: "Reporting", path: "/reporting" },
    { name: "IOT Hub", path: "/iot-hub" },
  ];

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                <h2 className="text-lg font-semibold text-primary mb-4">📍 Goodstrack</h2>
                {navigationItems.map((item) => (
                  <Button
                    key={item.path}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <div className="text-xl font-bold text-primary">📍 Goodstrack</div>
          {showBreadcrumb && (
            <>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{title}</span>
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </div>

          <Button variant="ghost" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            USER
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut className="h-4 w-4" />
            LOGOUT
          </Button>
        </div>
      </div>
    </header>
  );
}
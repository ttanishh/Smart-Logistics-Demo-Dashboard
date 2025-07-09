import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title?: string;
  showBreadcrumb?: boolean;
}

export function Header({ title = "Logistics", showBreadcrumb = false }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-primary">📍 Goodstrack</div>
          {showBreadcrumb && (
            <>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{title}</span>
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
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
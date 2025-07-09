import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ApplicationCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  onClick: () => void;
}

export function ApplicationCard({ title, icon: Icon, description, onClick }: ApplicationCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-medium transition-all duration-200 bg-gradient-secondary">
      <div className="mb-4">
        <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-soft">
          <Icon className="h-10 w-10 text-primary-foreground" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button variant="application" onClick={onClick} className="w-full">
        Open {title}
      </Button>
    </Card>
  );
}
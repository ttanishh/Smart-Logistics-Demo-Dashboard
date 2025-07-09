import { useNavigate } from "react-router-dom";
import { Truck, BarChart3, Wifi, Settings, Users, Bell, Building } from "lucide-react";
import { Header } from "@/components/Header";
import { ApplicationCard } from "@/components/ApplicationCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  const navigate = useNavigate();

  const applications = [
    {
      title: "In-Plant Logistics",
      icon: Truck,
      description: "Manage vehicle tracking and plant operations",
      path: "/in-plant-logistics"
    },
    {
      title: "Reporting",
      icon: BarChart3,
      description: "View analytics and generate reports",
      path: "/reporting"
    },
    {
      title: "IOT Hub",
      icon: Wifi,
      description: "Monitor connected devices and sensors",
      path: "/iot-hub"
    }
  ];

  const settingsMenu = [
    { title: "Business Units", icon: Building },
    { title: "Users", icon: Users },
    { title: "Groups", icon: Users },
    { title: "Notifications", icon: Bell }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Applications Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-2">APPLICATIONS</h1>
          <p className="text-muted-foreground">Choose an application to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {applications.map((app) => (
            <ApplicationCard
              key={app.title}
              title={app.title}
              icon={app.icon}
              description={app.description}
              onClick={() => navigate(app.path)}
            />
          ))}
        </div>

        {/* Settings Section */}
        <Card className="p-8 bg-gradient-secondary">
          <div className="flex items-center justify-center mb-6">
            <Settings className="h-6 w-6 text-muted-foreground mr-2" />
            <h2 className="text-xl font-bold text-foreground">SETTINGS</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {settingsMenu.map((item) => (
              <Button
                key={item.title}
                variant="settings"
                className="gap-2"
                onClick={() => console.log(`Navigate to ${item.title}`)}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Button>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
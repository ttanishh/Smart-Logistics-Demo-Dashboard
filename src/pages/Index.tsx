import { Card } from "@/components/ui/card";
import { NavigationBar } from "@/components/NavigationBar";
import { MetricCard } from "@/components/MetricCard";
import { ApplicationCard } from "@/components/ApplicationCard";
import { Truck, BarChart3, Settings, FileText, Activity, Users, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  
  const metrics = [
    { title: "Total Vehicles", value: "156", icon: Truck, trend: "+12 today", trendUp: true },
    { title: "Active Trips", value: "43", icon: Activity, trend: "8 in-progress", trendUp: true },
    { title: "Users Online", value: "28", icon: Users, trend: "+5 since morning", trendUp: true },
    { title: "Avg TAT", value: "3.2h", icon: Clock, trend: "-0.4h vs yesterday", trendUp: true },
  ];

  const applications = [
    {
      title: "In-Plant Logistics",
      description: "Monitor vehicle movements within plant premises",
      path: "/in-plant-logistics",
      icon: Truck,
      color: "blue"
    },
    {
      title: "IOT Hub",
      description: "Manage and monitor IoT devices and sensors",
      path: "/iot-hub",
      icon: Settings,
      color: "green"
    },
    {
      title: "Reporting",
      description: "Access comprehensive reports and analytics",
      path: "/reporting",
      icon: FileText,
      color: "purple"
    },
    {
      title: "Analytics",
      description: "View performance metrics and trends",
      path: "/analytics",
      icon: TrendingUp,
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <NavigationBar title="SMART LOGISTICS / DASHBOARD" />
      
      <main className="container mx-auto px-4 py-6">
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Applications Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <ApplicationCard 
                key={index} 
                {...app} 
                onClick={() => navigate(app.path)}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-green-50 border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Today's Performance</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-green-700">Vehicles Processed:</span>
                <span className="font-bold text-green-800">87</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Average TAT:</span>
                <span className="font-bold text-green-800">3.2 hrs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Efficiency:</span>
                <span className="font-bold text-green-800">94.5%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Current Status</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-blue-700">Vehicles in Plant:</span>
                <span className="font-bold text-blue-800">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700">Pending QA:</span>
                <span className="font-bold text-blue-800">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700">Ready for Dispatch:</span>
                <span className="font-bold text-blue-800">15</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-orange-50 border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Alerts & Notifications</h3>
            <div className="space-y-2">
              <div className="text-sm text-orange-700">• 2 vehicles delayed in QA</div>
              <div className="text-sm text-orange-700">• Plant B at 95% capacity</div>
              <div className="text-sm text-orange-700">• Weather alert for tomorrow</div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
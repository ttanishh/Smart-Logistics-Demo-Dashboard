import { useState } from "react";
import { ArrowLeft, Truck, Clock, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const tatData = [
  { time: "06:00", tat: 4.2 },
  { time: "08:00", tat: 3.8 },
  { time: "10:00", tat: 4.5 },
  { time: "12:00", tat: 3.9 },
  { time: "14:00", tat: 4.1 },
  { time: "16:00", tat: 3.7 },
  { time: "18:00", tat: 4.3 },
];

export default function InPlantLogistics() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("total");

  const metrics = [
    { title: "Total Vehicles", value: "88", icon: Truck, trend: "+5 today", trendUp: true },
    { title: "In Transit", value: "34", icon: Clock, trend: "12% increase", trendUp: true },
    { title: "Completed", value: "42", icon: CheckCircle, trend: "89% efficiency", trendUp: true },
    { title: "Pending", value: "12", icon: AlertTriangle, trend: "-3 from yesterday", trendUp: false },
  ];

  const milestones = [
    { id: 1, title: "Morning Dispatch Completed", time: "08:30", status: "completed" },
    { id: 2, title: "Plant A Loading", time: "10:15", status: "in-progress" },
    { id: 3, title: "Evening Round Start", time: "16:00", status: "pending" },
  ];

  const tripPolicies = [
    { id: 1, name: "Standard Delivery", duration: "4-6 hours", vehicles: 25 },
    { id: 2, name: "Express Delivery", duration: "2-3 hours", vehicles: 15 },
    { id: 3, name: "Bulk Transport", duration: "6-8 hours", vehicles: 48 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header title="In-Plant Logistics" showBreadcrumb />
      
      <main className="container mx-auto px-6 py-6">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => navigate("/")} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Applications
          </Button>
          <h1 className="text-2xl font-bold">Goodstrack Dashboard</h1>
        </div>

        {/* Metrics Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="total">Total 88</TabsTrigger>
            <TabsTrigger value="plant">Plant 88</TabsTrigger>
            <TabsTrigger value="outside">Outside 88</TabsTrigger>
            <TabsTrigger value="inbound">Inbound 88</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">VEHICLE ALLOCATION</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="vehicle-id">Vehicle ID</Label>
                  <Input id="vehicle-id" placeholder="Enter vehicle ID" />
                </div>
                <div>
                  <Label htmlFor="driver">Driver Name</Label>
                  <Input id="driver" placeholder="Enter driver name" />
                </div>
                <div>
                  <Label htmlFor="route">Route</Label>
                  <Input id="route" placeholder="Select route" />
                </div>
                <Button className="w-full">ALLOCATE</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">TRACKING DETAILS</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="tracking-id">Tracking ID</Label>
                  <Input id="tracking-id" placeholder="Enter tracking ID" />
                </div>
                <Button className="w-full">TRACK</Button>
              </div>
            </Card>
          </div>

          {/* Middle Column - TAT Analysis */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">TAT ANALYSIS</h3>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tatData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="tat" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Average TAT: 4.1 hours | Target: 4.0 hours
            </p>
          </Card>

          {/* Right Column - Milestones & Trip Policy */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">MILESTONES</h3>
              <div className="space-y-3">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{milestone.title}</p>
                      <p className="text-xs text-muted-foreground">{milestone.time}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                    }`} />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">TRIP POLICY</h3>
              <div className="space-y-3">
                {tripPolicies.map((policy) => (
                  <div key={policy.id} className="p-3 bg-muted rounded-lg">
                    <p className="font-medium text-sm">{policy.name}</p>
                    <p className="text-xs text-muted-foreground">{policy.duration}</p>
                    <p className="text-xs text-primary">{policy.vehicles} vehicles</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </main>
    </div>
  );
}
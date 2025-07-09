import { useState } from "react";
import { ArrowLeft, Truck, Clock, CheckCircle, AlertTriangle, TrendingUp, FileText, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

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

  // Sample data for Shipping Intimation popup
  const shippingData = [
    { id: "LOAD-001", materialName: "Steel Rods", category: "Raw Materials", vendorParty: "ABC Corp", vehicleType: "Truck", transporterName: "XYZ Transport" },
    { id: "LOAD-002", materialName: "Cement Bags", category: "Building Materials", vendorParty: "DEF Ltd", vehicleType: "Truck", transporterName: "PQR Logistics" },
    { id: "LOAD-003", materialName: "Iron Sheets", category: "Raw Materials", vendorParty: "GHI Industries", vehicleType: "Truck", transporterName: "ABC Transport" },
  ];

  const pieData = [
    { name: "IYALUA", value: 30, color: "#8884d8" },
    { name: "ELMA", value: 25, color: "#82ca9d" },
    { name: "ZMMA2", value: 20, color: "#ffc658" },
    { name: "Vendor Portal", value: 25, color: "#ff7300" },
  ];

  const barData = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 72 },
    { name: "Mar", value: 58 },
    { name: "Apr", value: 84 },
    { name: "May", value: 76 },
    { name: "Jun", value: 69 },
    { name: "Jul", value: 91 },
    { name: "Aug", value: 78 },
    { name: "Sep", value: 85 },
    { name: "Oct", value: 73 },
    { name: "Nov", value: 67 },
    { name: "Dec", value: 82 },
  ];

  // Sample data for TAT Analysis popup
  const tatAnalysisData = [
    { 
      vehicleType: "Total Vehicles", 
      departure: "08:30", 
      entryToSecurity: "09:15", 
      securityToWeighment: "09:30", 
      firstWeighment: "09:45", 
      secondWeighment: "10:30", 
      gateExit: "10:45", 
      uplTat: "2h 15m", 
      totalTat: "2h 15m" 
    },
    { 
      vehicleType: "IYALUA", 
      departure: "07:45", 
      entryToSecurity: "08:30", 
      securityToWeighment: "08:45", 
      firstWeighment: "09:00", 
      secondWeighment: "09:45", 
      gateExit: "10:00", 
      uplTat: "2h 15m", 
      totalTat: "2h 15m" 
    },
    { 
      vehicleType: "ELMA", 
      departure: "09:00", 
      entryToSecurity: "09:45", 
      securityToWeighment: "10:00", 
      firstWeighment: "10:15", 
      secondWeighment: "11:00", 
      gateExit: "11:15", 
      uplTat: "2h 15m", 
      totalTat: "2h 15m" 
    },
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

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          {/* Shipping Intimation Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2" size="lg">
                <FileText className="h-4 w-4" />
                Shipping Intimation
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Shipping Intimation Dashboard</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Vendor Portal Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="p-4">
                    <h3 className="font-semibold mb-4">Vendor Portal</h3>
                    <div className="space-y-2">
                      {["IYALUA", "ELMA", "ZMMA2", "Vendor Portal"].map((vendor) => (
                        <div key={vendor} className="p-3 bg-primary text-primary-foreground rounded">
                          {vendor}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
                
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Data Table */}
                  <Card className="p-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>S. No</TableHead>
                          <TableHead>Material Name</TableHead>
                          <TableHead>Material Category</TableHead>
                          <TableHead>Vendor/Party Name</TableHead>
                          <TableHead>Vehicle Type</TableHead>
                          <TableHead>Transporter Name</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {shippingData.map((item, index) => (
                          <TableRow key={item.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.materialName}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.vendorParty}</TableCell>
                            <TableCell>{item.vehicleType}</TableCell>
                            <TableCell>{item.transporterName}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>

                  {/* Charts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Pie Chart */}
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Distribution</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={80}
                              dataKey="value"
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>

                    {/* Bar Chart */}
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Monthly Analysis</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="hsl(var(--primary))" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* TAT Analysis Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2" size="lg">
                <BarChart3 className="h-4 w-4" />
                TAT Analysis
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>TAT Analysis Dashboard</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Vendor Portal Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="p-4">
                    <h3 className="font-semibold mb-4">Vendor Portal</h3>
                    <div className="space-y-2">
                      {["IYALUA", "ELMA", "ZMMA2", "Vendor Portal", "Others"].map((vendor) => (
                        <div key={vendor} className="p-3 bg-primary text-primary-foreground rounded">
                          {vendor}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
                
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <Card className="p-4">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Total Vehicles</TableHead>
                            <TableHead>Departure to Plant Entry time</TableHead>
                            <TableHead>Plant Entry to Security Check-in</TableHead>
                            <TableHead>Security Check-in to First Weighment</TableHead>
                            <TableHead>First Weighment to Second Weighment</TableHead>
                            <TableHead>Second Weighment to Gate Exit</TableHead>
                            <TableHead>Gate Exit to Depot</TableHead>
                            <TableHead>UPL TAT</TableHead>
                            <TableHead>Total TAT</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tatAnalysisData.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{row.vehicleType}</TableCell>
                              <TableCell>{row.departure}</TableCell>
                              <TableCell>{row.entryToSecurity}</TableCell>
                              <TableCell>{row.securityToWeighment}</TableCell>
                              <TableCell>{row.firstWeighment}</TableCell>
                              <TableCell>{row.secondWeighment}</TableCell>
                              <TableCell>{row.gateExit}</TableCell>
                              <TableCell>{row.uplTat}</TableCell>
                              <TableCell>{row.totalTat}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </Card>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
import { useState } from "react";
import { ArrowLeft, Truck, Clock, CheckCircle, AlertTriangle, TrendingUp, FileText, BarChart3, User, Settings, LogOut, Download, Edit, Menu } from "lucide-react";
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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

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

  // Additional chart data
  const radarData = [
    { subject: 'Efficiency', A: 120, B: 110, fullMark: 150 },
    { subject: 'Speed', A: 98, B: 130, fullMark: 150 },
    { subject: 'Quality', A: 86, B: 130, fullMark: 150 },
    { subject: 'Safety', A: 99, B: 100, fullMark: 150 },
    { subject: 'Cost', A: 85, B: 90, fullMark: 150 },
  ];

  const monthlyBarData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 28 },
    { month: 'Apr', value: 80 },
    { month: 'May', value: 99 },
    { month: 'Jun', value: 43 },
    { month: 'Jul', value: 78 },
    { month: 'Aug', value: 85 },
    { month: 'Sep', value: 43 },
    { month: 'Oct', value: 65 },
    { month: 'Nov', value: 78 },
    { month: 'Dec', value: 52 },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-blue-100 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-400 rounded"></div>
              <span className="text-blue-600 font-semibold">Goodstrack</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="bg-white text-slate-600">
              <User className="h-4 w-4 mr-2" />
              USER
            </Button>
            <Button variant="ghost" className="bg-blue-900 text-white">
              <LogOut className="h-4 w-4 mr-2" />
              LOGOUT
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-4 mb-2">
            <Button size="sm" className="bg-slate-600 text-white">
              Create New Trip
            </Button>
            <Button size="sm" variant="outline">
              Export Vehicle Alert
            </Button>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-6 bg-transparent">
              <TabsTrigger value="total" className="bg-slate-200">Total 88</TabsTrigger>
              <TabsTrigger value="plant" className="bg-slate-200">Plant 88</TabsTrigger>
              <TabsTrigger value="outside" className="bg-slate-200">Outside 88</TabsTrigger>
              <TabsTrigger value="inbound" className="bg-slate-200">Inbound 88</TabsTrigger>
              <TabsTrigger value="outbound" className="bg-slate-200">Outbound 88</TabsTrigger>
              <TabsTrigger value="internal" className="bg-slate-200">Internal 88</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-slate-700 text-white">
                SHIPPING INTIMATION →
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">←</Button>
                  <span className="text-blue-600 font-semibold">Goodstrack</span>
                  <div className="ml-auto flex items-center gap-2">
                    <Button variant="ghost" className="bg-slate-100">
                      <User className="h-4 w-4 mr-2" />
                      USER
                    </Button>
                    <Button variant="ghost" className="bg-blue-900 text-white">
                      <LogOut className="h-4 w-4 mr-2" />
                      LOGOUT
                    </Button>
                  </div>
                </div>
              </DialogHeader>
              <div className="grid grid-cols-5 gap-6">
                {/* Vendor Sidebar */}
                <div className="col-span-1">
                  <div className="space-y-2">
                    {["IYALUA", "ELMA", "ZMMA2", "Vendor Portal"].map((vendor) => (
                      <div key={vendor} className="p-3 bg-blue-900 text-white rounded font-medium">
                        {vendor}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="col-span-4 space-y-6">
                  {/* Table Header */}
                  <div className="bg-white rounded border">
                    <div className="grid grid-cols-6 gap-2 p-2 border-b bg-slate-50 text-sm font-medium">
                      <div>Date</div>
                      <div>Material Name</div>
                      <div>Material Category</div>
                      <div>Vendor/Party Name</div>
                      <div>Vehicle Type</div>
                      <div>Transporter Name</div>
                    </div>
                    <div className="p-2">
                      <div className="bg-blue-100 p-2 rounded text-sm font-medium text-center">
                        Material Category: 16/05/2023 {'->'} 06/10/2023 {'->'} 08/04/2019 {'->'} MTD
                      </div>
                    </div>
                    {/* Table Rows */}
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div key={index} className="grid grid-cols-6 gap-2 p-2 border-b text-sm">
                        <div>Lines, Year</div>
                        <div>Primary Text</div>
                        <div>Primary Text</div>
                        <div>Primary Text</div>
                        <div>Primary Text</div>
                        <div>Primary Text</div>
                      </div>
                    ))}
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Pie Chart */}
                    <Card className="p-4">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              dataKey="value"
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={["#8B9DC3", "#6C7B95", "#5A6B8D", "#4A5A7A"][index]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>

                    {/* Bar Chart */}
                    <Card className="p-4">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={monthlyBarData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8B9DC3" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-700 text-white">
                TAT Analysis →
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">←</Button>
                  <span className="text-blue-600 font-semibold">Goodstrack</span>
                  <div className="ml-auto flex items-center gap-2">
                    <Button variant="ghost" className="bg-slate-100">
                      <User className="h-4 w-4 mr-2" />
                      USER
                    </Button>
                    <Button variant="ghost" className="bg-blue-900 text-white">
                      <LogOut className="h-4 w-4 mr-2" />
                      LOGOUT
                    </Button>
                  </div>
                </div>
              </DialogHeader>
              <div className="grid grid-cols-5 gap-6">
                {/* Vendor Sidebar */}
                <div className="col-span-1">
                  <div className="space-y-2">
                    {["IYALUA", "ELMA", "ZMMA2", "Vendor Portal", "Others"].map((vendor) => (
                      <div key={vendor} className="p-3 bg-blue-900 text-white rounded font-medium">
                        {vendor}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="col-span-4">
                  <Card className="p-4">
                    <div className="overflow-x-auto">
                      <div className="grid grid-cols-9 gap-2 p-2 border-b bg-slate-50 text-xs font-medium">
                        <div>Total Vehicles</div>
                        <div>Departure to Plant Entry time</div>
                        <div>Plant Entry to Security Check-in</div>
                        <div>Security Check-in to First Weighment</div>
                        <div>First Weighment to Second Weighment</div>
                        <div>Second Weighment to Gate Exit</div>
                        <div>Gate Exit to Depot</div>
                        <div>UPL TAT</div>
                        <div>Total TAT</div>
                      </div>
                      {["IYALUA", "ELMA", "ZMMA2"].map((vendor) => (
                        <div key={vendor} className="grid grid-cols-9 gap-2 p-3 border-b text-xs">
                          <div className="font-medium">{vendor}</div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Live Trip Form */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4 text-sm">Live Trip</h3>
              <div className="space-y-3">
                <div>
                  <Label className="text-xs">Search Trip/Vehicle No.</Label>
                  <Input placeholder="" className="h-8 text-xs" />
                </div>
                <div>
                  <Label className="text-xs">Vehicle No.</Label>
                  <Input placeholder="" className="h-8 text-xs" />
                </div>
                <Button className="w-full h-8 bg-blue-600 text-xs">Live Trip</Button>
              </div>
            </Card>

            {/* Create Fleet External */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4 text-sm">Create Fleet External</h3>
              <div className="space-y-3">
                <div>
                  <Label className="text-xs">Document No.</Label>
                  <Input placeholder="" className="h-8 text-xs" />
                </div>
                <div>
                  <Label className="text-xs">Type</Label>
                  <Input placeholder="" className="h-8 text-xs" />
                </div>
                <Button className="w-full h-8 bg-blue-600 text-xs">Create Trip</Button>
              </div>
            </Card>

            {/* Trip Policy Table */}
            <Card className="p-4">
              <div className="space-y-2">
                <div className="grid grid-cols-2 text-xs font-medium border-b pb-1">
                  <div>TRIP POLICY</div>
                  <div>STATUS</div>
                </div>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="grid grid-cols-2 text-xs py-1">
                    <div>Submit</div>
                    <div>Description</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Center Content */}
          <div className="col-span-2 space-y-6">
            {/* Milestones */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-sm">MILESTONES</h3>
                <Button size="sm" variant="outline" className="text-xs">View Report {'>'}</Button>
              </div>
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                    <div></div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Circular Progress Chart */}
            <Card className="p-4">
              <div className="flex items-center justify-center h-64">
                <div className="relative w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[{ value: 67 }, { value: 33 }]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                      >
                        <Cell fill="#6B7280" />
                        <Cell fill="#E5E7EB" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">67%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Line Chart */}
            <Card className="p-4">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={tatData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="tat" stroke="#6B7280" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Radar Chart */}
            <Card className="p-4">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 150]} />
                    <Radar name="A" dataKey="A" stroke="#6B7280" fill="#6B7280" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Monthly Bar Chart */}
            <Card className="p-4">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyBarData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#6B7280" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Line Chart 2 */}
            <Card className="p-4">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#6B7280" strokeWidth={1} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Horizontal Bar Charts */}
            <Card className="p-4">
              <div className="space-y-3">
                {Array.from({ length: 15 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-xs w-8">{95 - index * 5}%</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded">
                      <div 
                        className="bg-slate-500 h-2 rounded" 
                        style={{ width: `${Math.random() * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Vertical Bar Chart */}
            <Card className="p-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyBarData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="month" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#6B7280" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Bottom Line Chart */}
            <Card className="p-4">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#6B7280" strokeWidth={1} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
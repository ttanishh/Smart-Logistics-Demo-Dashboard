import { useState } from "react";
import { Truck, User, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

// Chart data for the dashboard
const currentMonthData = [
  { time: "Day 1", avgTat: 3.2 },
  { time: "Day 2", avgTat: 2.8 },
  { time: "Day 3", avgTat: 3.5 },
  { time: "Day 4", avgTat: 4.1 },
  { time: "Day 5", avgTat: 3.7 },
  { time: "Day 6", avgTat: 2.9 },
  { time: "Day 7", avgTat: 3.8 },
  { time: "Day 8", avgTat: 4.2 },
  { time: "Day 9", avgTat: 3.1 },
  { time: "Day 10", avgTat: 3.9 },
  { time: "Day 11", avgTat: 4.0 },
  { time: "Day 12", avgTat: 3.4 },
  { time: "Day 13", avgTat: 3.6 },
  { time: "Day 14", avgTat: 4.3 },
  { time: "Day 15", avgTat: 3.8 },
];

const avgTimeDistribution = [
  { name: "DEPARTURE", value: 20, color: "#1e40af" },
  { name: "GATE TO PLANT", value: 15, color: "#3b82f6" },
  { name: "PLANT ENTRY", value: 25, color: "#60a5fa" },
  { name: "UNLOAD TIME", value: 30, color: "#93c5fd" },
  { name: "LOAD MATERIAL", value: 10, color: "#bfdbfe" },
];

const currentYearData = [
  { month: "Jan", value: 4500, target: 5000 },
  { month: "Feb", value: 5200, target: 5000 },
  { month: "Mar", value: 4800, target: 5000 },
  { month: "Apr", value: 5500, target: 5000 },
  { month: "May", value: 6200, target: 5000 },
  { month: "Jun", value: 5800, target: 5000 },
  { month: "Jul", value: 6000, target: 5000 },
  { month: "Aug", value: 5700, target: 5000 },
  { month: "Sep", value: 5900, target: 5000 },
  { month: "Oct", value: 6100, target: 5000 },
  { month: "Nov", value: 5600, target: 5000 },
  { month: "Dec", value: 5800, target: 5000 },
];

const delayDistribution = [
  { name: "PARKING TO GATE IN", value: 25, color: "#1e40af" },
  { name: "MULTI GATE", value: 15, color: "#3b82f6" },
  { name: "WAIT IN PLANT", value: 20, color: "#60a5fa" },
  { name: "OUT TO OUTGATE", value: 40, color: "#93c5fd" },
];

const totalVehiclesData = [
  { month: "Jan", value: 850 },
  { month: "Feb", value: 920 },
  { month: "Mar", value: 780 },
  { month: "Apr", value: 1020 },
  { month: "May", value: 1150 },
  { month: "Jun", value: 980 },
  { month: "Jul", value: 1080 },
  { month: "Aug", value: 1200 },
  { month: "Sep", value: 950 },
  { month: "Oct", value: 1100 },
  { month: "Nov", value: 1050 },
  { month: "Dec", value: 1180 },
];

const inboundVehiclesData = [
  { month: "Jan", value: 420 },
  { month: "Feb", value: 380 },
  { month: "Mar", value: 450 },
  { month: "Apr", value: 520 },
  { month: "May", value: 480 },
  { month: "Jun", value: 560 },
  { month: "Jul", value: 590 },
  { month: "Aug", value: 620 },
  { month: "Sep", value: 580 },
  { month: "Oct", value: 650 },
  { month: "Nov", value: 610 },
  { month: "Dec", value: 680 },
];

export default function InPlantLogistics() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("total");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-blue-100 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Menu className="w-6 h-6 text-slate-600" />
              <Truck className="w-6 h-6 text-slate-600" />
              <span className="text-slate-800 font-bold text-lg">SMART LOGISTICS / IN PLANT LOGISTICS</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="bg-white text-slate-800 border border-slate-300">
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

      <div className="container mx-auto px-4 py-4">
        {/* Top Action Buttons */}
        <div className="flex items-center gap-4 mb-4">
          <Button size="sm" className="bg-slate-600 text-white rounded-full">
            Create New Trip
          </Button>
          <Button size="sm" className="bg-slate-600 text-white rounded-full">
            Report Vehicle Arrival
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-6 bg-transparent gap-2">
              <TabsTrigger value="total" className="bg-orange-200 text-orange-800 border border-orange-300 rounded-full data-[state=active]:bg-orange-300">Total 88</TabsTrigger>
              <TabsTrigger value="plant" className="bg-orange-200 text-orange-800 border border-orange-300 rounded-full data-[state=active]:bg-orange-300">Plant 88</TabsTrigger>
              <TabsTrigger value="outside" className="bg-orange-200 text-orange-800 border border-orange-300 rounded-full data-[state=active]:bg-orange-300">Outside 88</TabsTrigger>
              <TabsTrigger value="inbound" className="bg-orange-200 text-orange-800 border border-orange-300 rounded-full data-[state=active]:bg-orange-300">Inbound 88</TabsTrigger>
              <TabsTrigger value="outbound" className="bg-orange-200 text-orange-800 border border-orange-300 rounded-full data-[state=active]:bg-orange-300">Outbound 88</TabsTrigger>
              <TabsTrigger value="internal" className="bg-orange-200 text-orange-800 border border-orange-300 rounded-full data-[state=active]:bg-orange-300">Internal 88</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Shipping Intimation Button */}
            <Card className="p-3">
              <Button className="w-full bg-slate-700 text-white">
                SHIPPING INTIMATION →
              </Button>
            </Card>

            {/* Load Trip Form */}
            <Card className="p-4">
              <h3 className="font-medium mb-3 text-sm">Load Trip</h3>
              <div className="space-y-3">
                <div>
                  <Label className="text-xs text-slate-600">Search Trip/Vehicle No.</Label>
                  <Input className="h-8 text-xs mt-1" />
                </div>
                <div>
                  <Label className="text-xs text-slate-600">Vehicle No.</Label>
                  <Input className="h-8 text-xs mt-1" />
                </div>
                <div>
                  <Label className="text-xs text-slate-600">Tag ID</Label>
                  <Input className="h-8 text-xs mt-1" />
                </div>
                <Button className="w-full h-8 bg-blue-600 text-xs">Load Trip</Button>
              </div>
            </Card>

            {/* Create From External */}
            <Card className="p-4">
              <h3 className="font-medium mb-3 text-sm">Create From External</h3>
              <div className="space-y-3">
                <div>
                  <Label className="text-xs text-slate-600">Document No.</Label>
                  <Input className="h-8 text-xs mt-1" />
                </div>
                <div>
                  <Label className="text-xs text-slate-600">Type</Label>
                  <Input className="h-8 text-xs mt-1" />
                </div>
                <Button className="w-full h-8 bg-blue-600 text-xs">Create Trip</Button>
              </div>
            </Card>

            {/* Trip Policy Table */}
            <Card className="p-4">
              <div className="space-y-2">
                <div className="grid grid-cols-2 text-xs font-medium border-b pb-2">
                  <div>TRIP POLICY</div>
                  <div>STATUS</div>
                </div>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="grid grid-cols-2 text-xs py-1 border-b border-slate-100">
                    <div>Subtitle</div>
                    <div>Description</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Center Content */}
          <div className="col-span-6 space-y-4">
            {/* Current Month Chart */}
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-blue-900">FOR CURRENT MONTH</h3>
              </div>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={currentMonthData}>
                    <XAxis dataKey="time" tick={false} />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="avgTat" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="text-xs text-blue-700 text-center mt-2">
                <span className="font-medium">AVG TAT</span>
                <div>DAY-WISE</div>
              </div>
            </Card>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-4">
              {/* Average Time Taken */}
              <Card className="p-4">
                <h3 className="text-xs font-medium mb-4 text-center">AVG TIME TAKEN<br/>(CURRENT MONTH)</h3>
                <div className="h-48 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={avgTimeDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={70}
                        dataKey="value"
                      >
                        {avgTimeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Current Day Progress */}
              <Card className="p-4 bg-blue-50 border-blue-200">
                <h3 className="text-sm font-medium text-blue-900 mb-4">FOR<br/>CURRENT<br/>DAY</h3>
                <div className="relative h-32 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#2563eb"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${88 * 2.51} ${100 * 2.51}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-blue-900 font-bold text-lg">88%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-blue-900 font-medium text-sm">IN TARGET</div>
                </div>
              </Card>
            </div>

            {/* Current Year Chart */}
            <Card className="p-4 bg-blue-50 border-blue-200">
              <h3 className="text-sm font-medium text-blue-900 mb-4">FOR CURRENT YEAR</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={currentYearData}>
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Bar dataKey="value" fill="#2563eb" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-xs text-blue-700 text-center mt-2">
                <span className="font-medium">IN TARGET</span>
              </div>
            </Card>

            {/* Average Delay Distribution */}
            <Card className="p-4">
              <h3 className="text-xs font-medium mb-4 text-center">AVERAGE DELAY DISTRIBUTION FOR<br/>PAST TWO MONTHS</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={delayDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      dataKey="value"
                    >
                      {delayDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Progress Bar Chart */}
            <Card className="p-4">
              <div className="space-y-2">
                <div className="text-xs font-medium text-right">TOTAL<br/>VEHICLES</div>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                  <div key={month} className="flex items-center gap-2">
                    <div className="text-xs w-8">{month}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
                    </div>
                  </div>
                ))}
                <div className="text-xs text-center mt-4">
                  NUMBER OF VEHICLES.<br/>
                  <span className="text-blue-600">NUMBER OF VEHICLES DID NOT<br/>STAY AT RIGHT</span>
                </div>
              </div>
            </Card>

            {/* Total Vehicles Bar Chart */}
            <Card className="p-4">
              <h3 className="text-sm font-medium text-center mb-4">TOTAL VEHICLES</h3>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={totalVehiclesData}>
                    <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                    <YAxis hide />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-xs text-center mt-2">MONTHWISE TREND</div>
            </Card>

            {/* Inbound Vehicles Line Chart */}
            <Card className="p-4">
              <h3 className="text-sm font-medium text-center mb-4 text-blue-600">INBOUND VEHICLES</h3>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inboundVehiclesData}>
                    <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="text-xs text-center mt-2">MONTHWISE TREND</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
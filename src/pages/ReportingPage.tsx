import { useState } from "react";
import { ArrowLeft, Download, Filter, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const vehicleData = [
  { name: "In Transit", value: 34, color: "#3b82f6" },
  { name: "At Plant", value: 28, color: "#10b981" },
  { name: "Loading", value: 16, color: "#f59e0b" },
  { name: "Maintenance", value: 10, color: "#ef4444" },
];

const performanceData = [
  { day: "Mon", trips: 45, efficiency: 92 },
  { day: "Tue", trips: 52, efficiency: 88 },
  { day: "Wed", trips: 48, efficiency: 95 },
  { day: "Thu", trips: 56, efficiency: 91 },
  { day: "Fri", trips: 61, efficiency: 87 },
  { day: "Sat", trips: 38, efficiency: 94 },
  { day: "Sun", trips: 29, efficiency: 89 },
];

const vehicleTableData = [
  { id: "VH001", driver: "John Doe", route: "Plant A-B", status: "In Transit", time: "2.5h", destination: "Plant B" },
  { id: "VH002", driver: "Mike Smith", route: "Plant B-C", status: "Loading", time: "0.5h", destination: "Plant C" },
  { id: "VH003", driver: "Sarah Johnson", route: "Plant A-D", status: "Completed", time: "4.2h", destination: "Plant D" },
  { id: "VH004", driver: "David Brown", route: "Plant C-A", status: "In Transit", time: "1.8h", destination: "Plant A" },
  { id: "VH005", driver: "Lisa Wilson", route: "Plant D-B", status: "Loading", time: "0.3h", destination: "Plant B" },
  { id: "VH006", driver: "Tom Anderson", route: "Plant B-D", status: "Completed", time: "3.9h", destination: "Plant D" },
];

export default function ReportingPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = vehicleTableData.filter(vehicle =>
    vehicle.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header title="Reporting Dashboard" showBreadcrumb />
      
      <main className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button variant="ghost" onClick={() => navigate("/")} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Applications
            </Button>
            <h1 className="text-2xl font-bold">Analytics & Reports</h1>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Vehicle Distribution Pie Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Vehicle Status Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={vehicleData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {vehicleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Performance Bar Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Weekly Performance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="trips" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Vehicle Activity Table */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Vehicle Activity Report</h3>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vehicle ID</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Destination</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell className="font-medium">{vehicle.id}</TableCell>
                    <TableCell>{vehicle.driver}</TableCell>
                    <TableCell>{vehicle.route}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        vehicle.status === "Completed" ? "bg-green-100 text-green-800" :
                        vehicle.status === "In Transit" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {vehicle.status}
                      </span>
                    </TableCell>
                    <TableCell>{vehicle.time}</TableCell>
                    <TableCell>{vehicle.destination}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </main>
    </div>
  );
}
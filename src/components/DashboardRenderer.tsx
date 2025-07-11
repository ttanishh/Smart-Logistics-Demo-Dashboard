import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, Edit, User, LogOut } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, ComposedChart } from "recharts";

interface DashboardRendererProps {
  dashboardKey: string;
  onBack: () => void;
}

export function DashboardRenderer({ dashboardKey, onBack }: DashboardRendererProps) {
  const dashboardTitles = {
    governance: "Governance Dashboard",
    security: "Security Dashboard", 
    plant: "Plant Dashboard",
    deviation: "Deviation Dashboard",
    qa: "QA Dashboard",
    ttat: "Total Turnaround Time Dashboard",
    "drill-down": "Drill Down Dashboard",
    "month-actual": "Month Actual VS Target TT Dashboard",
    "live-inplant": "LIVE In-Plant Dashboard"
  };

  const handleDownload = () => {
    console.log(`Downloading ${dashboardTitles[dashboardKey as keyof typeof dashboardTitles]} data`);
  };

  const handleEdit = () => {
    console.log(`Editing ${dashboardTitles[dashboardKey as keyof typeof dashboardTitles]}`);
  };

  const renderDashboard = () => {
    switch (dashboardKey) {
      case "governance":
        return <GovernanceDashboard />;
      case "security":
        return <SecurityDashboard />;
      case "plant":
        return <PlantDashboard />;
      case "deviation":
        return <DeviationDashboard />;
      case "qa":
        return <QADashboard />;
      case "ttat":
        return <TTATDashboard />;
      case "drill-down":
        return <DrillDownDashboard />;
      case "month-actual":
        return <MonthActualDashboard />;
      default:
        return <div>Dashboard not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <div className="bg-blue-100 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-blue-600 font-semibold text-lg">
              SMART LOGISTICS / REPORTING / {dashboardTitles[dashboardKey as keyof typeof dashboardTitles]}
            </span>
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

      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button onClick={handleDownload} className="bg-green-600 hover:bg-green-700">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button onClick={handleEdit} className="bg-blue-600 hover:bg-blue-700">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Blue Navigation Sidebar */}
          <div className="bg-blue-200 rounded-lg p-4">
            <div className="h-96"></div>
          </div>

          {/* Main Content */}
          <div className="col-span-3">
            {renderDashboard()}
          </div>
        </div>
      </main>
    </div>
  );
}

// Individual Dashboard Components
function GovernanceDashboard() {
  const chartData1 = [
    { month: "Jan", count: 45, avgTTT: 120 },
    { month: "Feb", count: 52, avgTTT: 110 },
    { month: "Mar", count: 38, avgTTT: 140 },
    { month: "Apr", count: 61, avgTTT: 95 },
    { month: "May", count: 42, avgTTT: 130 },
    { month: "Jun", count: 55, avgTTT: 105 },
  ];

  const chartData2 = [
    { day: "Mon", count: 28, target: 120 },
    { day: "Tue", count: 35, target: 125 },
    { day: "Wed", count: 42, target: 115 },
    { day: "Thu", count: 25, target: 130 },
    { day: "Fri", count: 38, target: 110 },
    { day: "Sat", count: 31, target: 135 },
    { day: "Sun", count: 45, target: 100 },
  ];

  return (
    <div className="space-y-6">
      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-orange-100">
          <h3 className="text-sm font-semibold mb-2">VEHICLE COUNT AND AVG TTT</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8B5CF6" />
                <Line type="monotone" dataKey="avgTTT" stroke="#F59E0B" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-4 bg-orange-100">
          <h3 className="text-sm font-semibold mb-2">DAYWISE AVG TTT VS TARGET</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8B5CF6" />
                <Line type="monotone" dataKey="target" stroke="#F59E0B" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Table */}
      <Card className="p-4 bg-purple-100">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-900">
                <TableHead className="text-white">ID</TableHead>
                <TableHead className="text-white">Vehicle Number</TableHead>
                <TableHead className="text-white">VCP NUMBER</TableHead>
                <TableHead className="text-white">MATERIAL NAME</TableHead>
                <TableHead className="text-white">MATERIAL GROUP</TableHead>
                <TableHead className="text-white">VEHICLE TYPE</TableHead>
                <TableHead className="text-white">3RD PARTY WEIGHT</TableHead>
                <TableHead className="text-white">TARE WEIGHT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

function SecurityDashboard() {
  return (
    <div className="space-y-6">
      {/* Status Cards Row */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "VEHICLE - GIDC", value: "88" },
          { label: "VEHICLE FOR GATE INWARD", value: "88" },
          { label: "VEHICLE FROM GIDC", value: "88" },
          { label: "VEHICLE REPORTED - GATE", value: "88" },
          { label: "VEHICLE FOR INSPECTION", value: "88" },
          { label: "PENDING FOR 1ST WT", value: "88" },
          { label: "PENDING FOR 2ND WT", value: "88" },
          { label: "PENDING FOR GATE OUT", value: "88" },
        ].map((item, index) => (
          <div key={index} className="bg-blue-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-900">{item.value}</div>
            <div className="text-xs text-blue-800">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Tables Row */}
      <div className="space-y-4">
        <Card className="p-4 bg-orange-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-900">
                <TableHead className="text-white">VEHICLE NUMBER</TableHead>
                <TableHead className="text-white">MATERIAL NAME</TableHead>
                <TableHead className="text-white">SUPPLIER NAME</TableHead>
                <TableHead className="text-white">TIME</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 8 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="p-4 bg-orange-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-900">
                <TableHead className="text-white">VEHICLE ENTRY PASS</TableHead>
                <TableHead className="text-white">VEHICLE VENDOR</TableHead>
                <TableHead className="text-white">VEHICLE TYPE</TableHead>
                <TableHead className="text-white">INWARD TO PLATE</TableHead>
                <TableHead className="text-white">1ST WT TO OUTWARD</TableHead>
                <TableHead className="text-white">2ND WT TO OUTWARD</TableHead>
                <TableHead className="text-white">1ST WEIGHT</TableHead>
                <TableHead className="text-white">2ND WEIGHT</TableHead>
                <TableHead className="text-white">STORAGE/ YARD</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 8 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

function PlantDashboard() {
  return (
    <div className="space-y-6">
      {/* Status Cards */}
      <div className="grid grid-cols-2 gap-4 max-w-md">
        <div className="bg-yellow-300 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">88</div>
          <div className="text-sm">Total Vehicles Inside the Plant</div>
        </div>
        <div className="bg-yellow-300 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">88</div>
          <div className="text-sm">Vehicles Ready for Unloading</div>
        </div>
      </div>

      {/* Vehicle in plant Premises Table */}
      <Card className="p-4 bg-orange-100">
        <h3 className="font-semibold mb-4">Vehicle in plant Premises</h3>
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-600">
              <TableHead className="text-white">Vehicle Number</TableHead>
              <TableHead className="text-white">Vehicle Type</TableHead>
              <TableHead className="text-white">Plant Name</TableHead>
              <TableHead className="text-white">Material Name</TableHead>
              <TableHead className="text-white">Supplier Name</TableHead>
              <TableHead className="text-white">Material Unload Start Time</TableHead>
              <TableHead className="text-white">Material Unload End Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Overshooting Time Table */}
      <Card className="p-4 bg-purple-100">
        <h3 className="font-semibold mb-4">Vehicle in plant Premises - Overshooting Time</h3>
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-600">
              <TableHead className="text-white">Vehicle Number</TableHead>
              <TableHead className="text-white">Vehicle Type</TableHead>
              <TableHead className="text-white">Plant Name</TableHead>
              <TableHead className="text-white">Material Name</TableHead>
              <TableHead className="text-white">Plant Inward Date</TableHead>
              <TableHead className="text-white">Plant Inward Time</TableHead>
              <TableHead className="text-white">Plant Outward Date</TableHead>
              <TableHead className="text-white">Plant Outward Time</TableHead>
              <TableHead className="text-white">Plant Time Taken</TableHead>
              <TableHead className="text-white">Plant in QA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 3 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function DeviationDashboard() {
  const pieData1 = [
    { name: "Type 1", value: 60, color: "#1E40AF" },
    { name: "Type 2", value: 40, color: "#3B82F6" },
  ];

  const pieData2 = [
    { name: "Type 1", value: 60, color: "#1E40AF" },
    { name: "Type 2", value: 40, color: "#3B82F6" },
  ];

  return (
    <div className="space-y-6">
      {/* Description */}
      <Card className="p-4 bg-blue-50">
        <div className="text-sm">
          <p><strong>The Dashboard has been designed to track any deviation from the actual process.</strong></p>
          <p><strong>The Deviation can be mainly of two types:</strong></p>
          <p><strong>1. Deviation in the QA process</strong></p>
          <p><strong>2. Deviation in the Weighment.</strong></p>
        </div>
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-4 bg-purple-100">
          <h3 className="font-semibold text-center mb-4">Vehicle Type - QA failed</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData1}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >
                  {pieData1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button size="sm" className="bg-blue-900">Type 1</Button>
            <Button size="sm" className="bg-blue-600">Type 2</Button>
            <Button size="sm" className="bg-blue-300">Type 3</Button>
          </div>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow className="bg-orange-400">
                  <TableHead>Material Code</TableHead>
                  <TableHead>Material Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Plant Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-4 bg-purple-100">
          <h3 className="font-semibold text-center mb-4">Material Deviation in Vehicle Type</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData2}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >
                  {pieData2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button size="sm" className="bg-blue-900">Type 1</Button>
            <Button size="sm" className="bg-blue-600">Type 2</Button>
            <Button size="sm" className="bg-blue-300">Type 3</Button>
          </div>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow className="bg-orange-400">
                  <TableHead>Vehicle Number</TableHead>
                  <TableHead>Vehicle Type</TableHead>
                  <TableHead>Material Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}

function QADashboard() {
  const chartData1 = [
    { month: "Jan", ttt: 85, target: 100 },
    { month: "Feb", ttt: 92, target: 100 },
    { month: "Mar", ttt: 105, target: 100 },
    { month: "Apr", ttt: 78, target: 100 },
    { month: "May", ttt: 88, target: 100 },
    { month: "Jun", ttt: 95, target: 100 },
  ];

  const chartData2 = [
    { material: "Mat1", trips: 45, occurance: 12 },
    { material: "Mat2", trips: 38, occurance: 8 },
    { material: "Mat3", trips: 52, occurance: 15 },
    { material: "Mat4", trips: 29, occurance: 6 },
    { material: "Mat5", trips: 41, occurance: 11 },
    { material: "Mat6", trips: 35, occurance: 9 },
    { material: "Mat7", trips: 48, occurance: 13 },
  ];

  return (
    <div className="space-y-6">
      {/* Status Cards */}
      <div className="grid grid-cols-5 gap-2">
        {[
          { label: "VEHICLE PENDING QA", value: "88" },
          { label: "TOTAL VEHICLE INSPECTED", value: "88" },
          { label: "QA STATUS PASSED", value: "88" },
          { label: "QA STATUS PENDING", value: "88" },
          { label: "QA STATUS FAILED", value: "88" },
        ].map((item, index) => (
          <div key={index} className="bg-blue-200 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-blue-900">{item.value}</div>
            <div className="text-xs text-blue-800">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-purple-100">
          <h3 className="font-semibold mb-2">MONTH WISE AVG TTT VS TARGET</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ttt" fill="#F59E0B" />
                <Line type="monotone" dataKey="target" stroke="#1F2937" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-4 bg-purple-100">
          <h3 className="font-semibold mb-2">MATERIAL, TTT AND OCCURANCE</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="material" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="trips" fill="#F59E0B" />
                <Line type="monotone" dataKey="occurance" stroke="#1F2937" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Table */}
      <Card className="p-4 bg-orange-100">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-900">
              <TableHead className="text-white">YEAR</TableHead>
              <TableHead className="text-white">MATERIAL NAME</TableHead>
              <TableHead className="text-white">LOT INSPECTED</TableHead>
              <TableHead className="text-white">PASSED</TableHead>
              <TableHead className="text-white">PASSED</TableHead>
              <TableHead className="text-white">FAILED</TableHead>
              <TableHead className="text-white">FAILED %</TableHead>
              <TableHead className="text-white">SUPPLIER NAME</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function TTATDashboard() {
  const chartData1 = [
    { material: "Mat1", vehicles: 25, avgTtt: 120 },
    { material: "Mat2", vehicles: 35, avgTtt: 105 },
    { material: "Mat3", vehicles: 42, avgTtt: 135 },
    { material: "Mat4", vehicles: 28, avgTtt: 95 },
    { material: "Mat5", vehicles: 31, avgTtt: 115 },
    { material: "Mat6", vehicles: 38, avgTtt: 125 },
  ];

  const chartData2 = [
    { month: "Jan", vehicles: 145, avgTtt: 110 },
    { month: "Feb", vehicles: 152, avgTtt: 105 },
    { month: "Mar", vehicles: 138, avgTtt: 120 },
    { month: "Apr", vehicles: 168, avgTtt: 95 },
    { month: "May", vehicles: 155, avgTtt: 115 },
    { month: "Jun", vehicles: 142, avgTtt: 108 },
  ];

  const chartData3 = [
    { type: "Type1", vehicles: 65, avgTtt: 115 },
    { type: "Type2", vehicles: 85, avgTtt: 125 },
    { type: "Type3", vehicles: 95, avgTtt: 105 },
    { type: "Type4", vehicles: 75, avgTtt: 135 },
  ];

  return (
    <div className="space-y-6">
      {/* Status Cards */}
      <div className="grid grid-cols-5 gap-2">
        {[
          { label: "Avg TTT - 2022 (in Hrs)", value: "88" },
          { label: "Avg TTT - 2023 (in Hrs)", value: "88" },
          { label: "Avg TTT - Previous Month (in Hrs)", value: "88" },
          { label: "Avg TTT - Current Month (in Hrs)", value: "88" },
          { label: "Avg TTT - Today (in Hrs)", value: "88" },
        ].map((item, index) => (
          <div key={index} className="bg-purple-400 rounded-lg p-3 text-center text-white">
            <div className="text-xl font-bold">{item.value}</div>
            <div className="text-xs">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-orange-100">
          <h3 className="font-semibold mb-2">AVG TTT - MATERIAL NAME</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="material" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vehicles" fill="#1E40AF" />
                <Line type="monotone" dataKey="avgTtt" stroke="#3B82F6" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-4 bg-orange-100">
          <h3 className="font-semibold mb-2">AVG TTT - MONTH WISE</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vehicles" fill="#1E40AF" />
                <Line type="monotone" dataKey="avgTtt" stroke="#3B82F6" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Bottom Chart */}
      <Card className="p-4 bg-purple-100">
        <h3 className="font-semibold mb-2">AVG TTT - VEHICLE TYPE</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData3}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="vehicles" fill="#1E40AF" />
              <Line type="monotone" dataKey="avgTtt" stroke="#3B82F6" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

function DrillDownDashboard() {
  return (
    <div className="space-y-6">
      {/* Description */}
      <Card className="p-4 bg-blue-50">
        <div className="text-sm">
          <p><strong>The Dashboard has been designed to track any deviation from the actual process.</strong></p>
          <p><strong>Click on the Tile to expand.</strong></p>
        </div>
      </Card>

      {/* Drill Down Visualization */}
      <Card className="p-6 bg-white">
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Central Node */}
            <div className="bg-green-500 text-white p-4 rounded text-center font-bold">
              Total Vehicles 888
            </div>
            
            {/* Location Branch */}
            <div className="absolute top-0 -mt-32 left-1/2 transform -translate-x-1/2">
              <div className="text-center">
                <div className="text-sm font-semibold mb-2">Location</div>
                <div className="space-y-1">
                  {["Inside Plant 88", "QA 88", "Outside Gate 88", "Inside Gate 88", "Weighing 88"].map((item, i) => (
                    <div key={i} className="bg-blue-400 text-white px-3 py-1 rounded text-xs">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Trip Type and Time Line branches */}
              <div className="flex gap-8 mt-4">
                <div className="text-center">
                  <div className="text-xs font-semibold mb-1">Trip Type</div>
                  <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">Outbound 88</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold mb-1">Time Line</div>
                  <div className="space-y-1">
                    <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">Inbound 88</div>
                    <div className="bg-red-400 text-white px-2 py-1 rounded text-xs">Inbound 88</div>
                    <div className="bg-teal-400 text-white px-2 py-1 rounded text-xs">On time 88</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Type Branch */}
            <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
              <div className="text-center">
                <div className="text-sm font-semibold mb-2">Vehicle Type</div>
                <div className="grid grid-cols-2 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-blue-400 text-white px-3 py-1 rounded text-xs">
                      Type {i + 1}
                    </div>
                  ))}
                </div>
                
                {/* Trip Type and Time Line branches from Vehicle Type */}
                <div className="flex gap-8 mt-4">
                  <div className="text-center">
                    <div className="text-xs font-semibold mb-1">Trip Type</div>
                    <div className="space-y-1">
                      <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">Outbound 88</div>
                      <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">Inbound 88</div>
                      <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">Inbound Others 88</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold mb-1">Time Line</div>
                    <div className="space-y-1">
                      <div className="bg-red-400 text-white px-2 py-1 rounded text-xs">Inbound 88</div>
                      <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">Inbound 88</div>
                      <div className="bg-teal-400 text-white px-2 py-1 rounded text-xs">On time 88</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function MonthActualDashboard() {
  const chartData1 = [
    { day: "Mon", ttt: 85, target: 100 },
    { day: "Tue", ttt: 72, target: 100 },
    { day: "Wed", ttt: 95, target: 100 },
    { day: "Thu", ttt: 88, target: 100 },
    { day: "Fri", ttt: 91, target: 100 },
    { day: "Sat", ttt: 76, target: 100 },
  ];

  const chartData2 = [
    { material: "Mat1", vehicles: 45, occurance: 12 },
    { material: "Mat2", vehicles: 38, occurance: 8 },
    { material: "Mat3", vehicles: 52, occurance: 15 },
    { material: "Mat4", vehicles: 41, occurance: 11 },
    { material: "Mat5", vehicles: 35, occurance: 9 },
    { material: "Mat6", vehicles: 48, occurance: 13 },
    { material: "Mat7", vehicles: 42, occurance: 10 },
  ];

  return (
    <div className="space-y-6">
      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-orange-100">
          <h3 className="font-semibold mb-2">DAYWISE TTT VS MONTHLY TTT</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ttt" fill="#8B5CF6" />
                <Line type="monotone" dataKey="target" stroke="#F59E0B" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-4 bg-orange-100">
          <h3 className="font-semibold mb-2">AVG TTT - VEHICLE TYPE AND OCCURANCE</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="material" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vehicles" fill="#8B5CF6" />
                <Line type="monotone" dataKey="occurance" stroke="#F59E0B" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Table */}
      <Card className="p-4 bg-purple-100">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-600">
              <TableHead className="text-white">YEAR</TableHead>
              <TableHead className="text-white">Vehicle Number</TableHead>
              <TableHead className="text-white">Vehicle Type</TableHead>
              <TableHead className="text-white">Inward Date</TableHead>
              <TableHead className="text-white">Inward Time</TableHead>
              <TableHead className="text-white">Outward Date</TableHead>
              <TableHead className="text-white">Outward Time</TableHead>
              <TableHead className="text-white">Material Name</TableHead>
              <TableHead className="text-white">Supplier Name</TableHead>
              <TableHead className="text-white">Plant Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
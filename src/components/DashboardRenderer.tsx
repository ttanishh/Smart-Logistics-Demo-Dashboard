import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Edit } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, ComposedChart } from "recharts";
import { NavigationBar } from "@/components/NavigationBar";

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
    "live-inplant": "LIVE In-Plant Dashboard",
    "ttat-qa-material": "TTAT(QA) MATERIAL",
    "ttat-performance": "TTAT - PERFORMANCE REPORT",
    "vehicle-inspection-deviation": "VEHICLE INSPECTION & DEVIATION (QA) REPORT",
    "ttat-vehicle-night-reduction": "TTAT - REDUCTION IN VEHICLES STAY AT NIGHT",
    "tat-past-data-analysis": "TAT PAST DATA ANALYSIS REPORT",
    "ttat-qa-vehicle-type": "TTAT (QA) VEHICLE TYPE REPORT"
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
      case "ttat-qa-material":
        return <TTATQAMaterialDashboard />;
      case "ttat-performance":
        return <TTATPerformanceDashboard />;
      case "vehicle-inspection-deviation":
        return <VehicleInspectionDeviationDashboard />;
      case "ttat-vehicle-night-reduction":
        return <TTATVehicleNightReductionDashboard />;
      case "tat-past-data-analysis":
        return <TATPastDataAnalysisDashboard />;
      case "ttat-qa-vehicle-type":
        return <TTATQAVehicleTypeDashboard />;
      default:
        return <div>Dashboard not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <NavigationBar 
        title={`SMART LOGISTICS / REPORTING / ${dashboardTitles[dashboardKey as keyof typeof dashboardTitles]}`}
        showBackButton={true}
        onBack={onBack}
      />

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
            <h3 className="font-semibold text-blue-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-blue-700 hover:bg-blue-300">
                Export Data
              </Button>
              <Button variant="ghost" className="w-full justify-start text-blue-700 hover:bg-blue-300">
                Print Report
              </Button>
              <Button variant="ghost" className="w-full justify-start text-blue-700 hover:bg-blue-300">
                Share Report
              </Button>
              <Button variant="ghost" className="w-full justify-start text-blue-700 hover:bg-blue-300">
                Schedule Report
              </Button>
            </div>
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
              {[
                { id: "V001", vehicleNumber: "GJ05AB1234", vcpNumber: "VCP001", materialName: "Caustic Soda", materialGroup: "Chemicals", vehicleType: "Tanker", thirdPartyWeight: "25.5 MT", tareWeight: "8.2 MT" },
                { id: "V002", vehicleNumber: "MH12CD5678", vcpNumber: "VCP002", materialName: "Ammonia Solution", materialGroup: "Chemicals", vehicleType: "ISO Tank", thirdPartyWeight: "22.8 MT", tareWeight: "7.5 MT" },
                { id: "V003", vehicleNumber: "KA09EF9012", vcpNumber: "VCP003", materialName: "Salt Grade-I", materialGroup: "Raw Materials", vehicleType: "Truck", thirdPartyWeight: "18.3 MT", tareWeight: "6.8 MT" },
                { id: "V004", vehicleNumber: "RJ14GH3456", vcpNumber: "VCP004", materialName: "Methanol", materialGroup: "Solvents", vehicleType: "Tanker", thirdPartyWeight: "28.1 MT", tareWeight: "9.0 MT" },
                { id: "V005", vehicleNumber: "TN33IJ7890", vcpNumber: "VCP005", materialName: "Ethylene Diamine", materialGroup: "Chemicals", vehicleType: "ISO Tank", thirdPartyWeight: "20.5 MT", tareWeight: "7.2 MT" },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.vehicleNumber}</TableCell>
                  <TableCell>{row.vcpNumber}</TableCell>
                  <TableCell>{row.materialName}</TableCell>
                  <TableCell>{row.materialGroup}</TableCell>
                  <TableCell>{row.vehicleType}</TableCell>
                  <TableCell>{row.thirdPartyWeight}</TableCell>
                  <TableCell>{row.tareWeight}</TableCell>
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
              {[
                { vehicleNumber: "GJ05AB1234", materialName: "Caustic Soda Lye", supplierName: "Gujarat Chemicals Ltd", time: "09:15 AM" },
                { vehicleNumber: "MH12CD5678", materialName: "Ammonia Solution", supplierName: "Maharashtra Ammonia Co", time: "10:30 AM" },
                { vehicleNumber: "KA09EF9012", materialName: "Salt Grade-I", supplierName: "Karnataka Salt Works", time: "11:45 AM" },
                { vehicleNumber: "RJ14GH3456", materialName: "Methanol", supplierName: "Rajasthan Methanol Pvt", time: "12:15 PM" },
                { vehicleNumber: "TN33IJ7890", materialName: "Ethylene Diamine", supplierName: "Tamil Nadu Chemicals", time: "01:30 PM" },
                { vehicleNumber: "UP16KL2345", materialName: "Zinc Sulphate", supplierName: "UP Chemical Industries", time: "02:45 PM" },
                { vehicleNumber: "WB19MN6789", materialName: "Hi Chloron", supplierName: "Bengal Chemical Works", time: "03:20 PM" },
                { vehicleNumber: "AP22OP1234", materialName: "Manganese Sulphate", supplierName: "Andhra Manganese Co", time: "04:10 PM" },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.vehicleNumber}</TableCell>
                  <TableCell>{row.materialName}</TableCell>
                  <TableCell>{row.supplierName}</TableCell>
                  <TableCell>{row.time}</TableCell>
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
              {[
                { entryPass: "EP001", vendor: "Gujarat Chemicals", vehicleType: "Tanker", inwardToPlate: "45 mins", firstWtToOutward: "2.5 hrs", secondWtToOutward: "1.2 hrs", firstWeight: "25.5 MT", secondWeight: "17.3 MT", storage: "Yard A" },
                { entryPass: "EP002", vendor: "Maharashtra Ammonia", vehicleType: "ISO Tank", inwardToPlate: "38 mins", firstWtToOutward: "3.1 hrs", secondWtToOutward: "1.8 hrs", firstWeight: "22.8 MT", secondWeight: "15.2 MT", storage: "Yard B" },
                { entryPass: "EP003", vendor: "Karnataka Salt", vehicleType: "Truck", inwardToPlate: "52 mins", firstWtToOutward: "2.8 hrs", secondWtToOutward: "1.5 hrs", firstWeight: "18.3 MT", secondWeight: "11.5 MT", storage: "Storage 1" },
                { entryPass: "EP004", vendor: "Rajasthan Methanol", vehicleType: "Tanker", inwardToPlate: "41 mins", firstWtToOutward: "2.2 hrs", secondWtToOutward: "1.1 hrs", firstWeight: "28.1 MT", secondWeight: "19.1 MT", storage: "Yard C" },
                { entryPass: "EP005", vendor: "Tamil Nadu Chemicals", vehicleType: "ISO Tank", inwardToPlate: "49 mins", firstWtToOutward: "3.5 hrs", secondWtToOutward: "2.0 hrs", firstWeight: "20.5 MT", secondWeight: "13.3 MT", storage: "Storage 2" },
                { entryPass: "EP006", vendor: "UP Chemical Industries", vehicleType: "Truck", inwardToPlate: "35 mins", firstWtToOutward: "2.1 hrs", secondWtToOutward: "0.9 hrs", firstWeight: "16.7 MT", secondWeight: "9.8 MT", storage: "Yard D" },
                { entryPass: "EP007", vendor: "Bengal Chemical Works", vehicleType: "Tanker", inwardToPlate: "46 mins", firstWtToOutward: "2.9 hrs", secondWtToOutward: "1.6 hrs", firstWeight: "24.2 MT", secondWeight: "16.5 MT", storage: "Storage 3" },
                { entryPass: "EP008", vendor: "Andhra Manganese", vehicleType: "ISO Tank", inwardToPlate: "43 mins", firstWtToOutward: "2.7 hrs", secondWtToOutward: "1.4 hrs", firstWeight: "21.9 MT", secondWeight: "14.1 MT", storage: "Yard E" },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.entryPass}</TableCell>
                  <TableCell>{row.vendor}</TableCell>
                  <TableCell>{row.vehicleType}</TableCell>
                  <TableCell>{row.inwardToPlate}</TableCell>
                  <TableCell>{row.firstWtToOutward}</TableCell>
                  <TableCell>{row.secondWtToOutward}</TableCell>
                  <TableCell>{row.firstWeight}</TableCell>
                  <TableCell>{row.secondWeight}</TableCell>
                  <TableCell>{row.storage}</TableCell>
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
              {[
                { vehicleNumber: "GJ05AB1234", vehicleType: "Tanker", plantName: "Plant A", materialName: "Caustic Soda", supplierName: "Gujarat Chemicals Ltd", startTime: "09:15 AM", endTime: "11:30 AM" },
                { vehicleNumber: "MH12CD5678", vehicleType: "ISO Tank", plantName: "Plant B", materialName: "Ammonia Solution", supplierName: "Maharashtra Ammonia Co", startTime: "10:30 AM", endTime: "12:45 PM" },
                { vehicleNumber: "KA09EF9012", vehicleType: "Truck", plantName: "Plant A", materialName: "Salt Grade-I", supplierName: "Karnataka Salt Works", startTime: "11:45 AM", endTime: "01:20 PM" },
                { vehicleNumber: "RJ14GH3456", vehicleType: "Tanker", plantName: "Plant C", materialName: "Methanol", supplierName: "Rajasthan Methanol Pvt", startTime: "12:15 PM", endTime: "02:30 PM" },
                { vehicleNumber: "TN33IJ7890", vehicleType: "ISO Tank", plantName: "Plant B", materialName: "Ethylene Diamine", supplierName: "Tamil Nadu Chemicals", startTime: "01:30 PM", endTime: "03:45 PM" },
                { vehicleNumber: "UP16KL2345", vehicleType: "Truck", plantName: "Plant A", materialName: "Zinc Sulphate", supplierName: "UP Chemical Industries", startTime: "02:45 PM", endTime: "04:15 PM" },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.vehicleNumber}</TableCell>
                  <TableCell>{row.vehicleType}</TableCell>
                  <TableCell>{row.plantName}</TableCell>
                  <TableCell>{row.materialName}</TableCell>
                  <TableCell>{row.supplierName}</TableCell>
                  <TableCell>{row.startTime}</TableCell>
                  <TableCell>{row.endTime}</TableCell>
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
              {[
                { vehicleNumber: "WB19MN6789", vehicleType: "Tanker", plantName: "Plant A", materialName: "Hi Chloron", inwardDate: "2024-01-15", inwardTime: "08:30 AM", outwardDate: "2024-01-15", outwardTime: "06:45 PM", timeTaken: "10h 15m", plantInQA: "Yes" },
                { vehicleNumber: "AP22OP1234", vehicleType: "ISO Tank", plantName: "Plant B", materialName: "Manganese Sulphate", inwardDate: "2024-01-15", inwardTime: "09:45 AM", outwardDate: "2024-01-16", outwardTime: "07:20 AM", timeTaken: "21h 35m", plantInQA: "Yes" },
                { vehicleNumber: "HR08QR5678", vehicleType: "Truck", plantName: "Plant C", materialName: "Phosphoric Acid", inwardDate: "2024-01-15", inwardTime: "11:20 AM", outwardDate: "2024-01-16", outwardTime: "09:15 AM", timeTaken: "21h 55m", plantInQA: "No" },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.vehicleNumber}</TableCell>
                  <TableCell>{row.vehicleType}</TableCell>
                  <TableCell>{row.plantName}</TableCell>
                  <TableCell>{row.materialName}</TableCell>
                  <TableCell>{row.inwardDate}</TableCell>
                  <TableCell>{row.inwardTime}</TableCell>
                  <TableCell>{row.outwardDate}</TableCell>
                  <TableCell>{row.outwardTime}</TableCell>
                  <TableCell>{row.timeTaken}</TableCell>
                  <TableCell>{row.plantInQA}</TableCell>
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
                {[
                  { materialCode: "MC001", materialName: "Caustic Soda Lye", quantity: "25.5 MT", date: "2024-01-15", plantName: "Plant A" },
                  { materialCode: "MC002", materialName: "Ammonia Solution", quantity: "22.8 MT", date: "2024-01-15", plantName: "Plant B" },
                  { materialCode: "MC003", materialName: "Salt Grade-I", quantity: "18.3 MT", date: "2024-01-15", plantName: "Plant A" },
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.materialCode}</TableCell>
                    <TableCell>{row.materialName}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.plantName}</TableCell>
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

// New Report Dashboard Components

function TTATQAMaterialDashboard() {
  const trendData = [
    { month: "JUL-23", value: 79.89, target: 100 },
    { month: "AUG-23", value: 100, target: 100 },
    { month: "SEP-23", value: 86.89, target: 100 },
    { month: "JAN", value: 79.23, target: 100 },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-teal-50 border-2 border-teal-400">
        <div className="bg-teal-500 text-white p-3 rounded mb-4">
          <h2 className="text-lg font-bold">TTAT (QA) MATERIAL | REPORT</h2>
        </div>
        
        <Card className="p-4 bg-green-100">
          <h3 className="font-semibold mb-4 text-green-700">Trends - Average QA TAT (Hrs.)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#EF4444" 
                  strokeDasharray="5 5"
                  strokeWidth={2}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm">Positive Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm">Negative Growth</span>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
}

function TTATPerformanceDashboard() {
  const performanceData = [
    { month: "Apr-23", rm: 6.12, target: 9 },
    { month: "May-23", rm: 19.32, target: 9 },
    { month: "Jun-23", rm: 17.55, target: 9 },
    { month: "Jul-23", rm: 13.16, target: 9 },
    { month: "Aug-23", rm: 10.41, target: 9 },
    { month: "Sep-23", rm: 8.47, target: 9 },
  ];

  const materialData = [
    { month: "Mar-23", value: 11.78 },
    { month: "Apr-23", value: 15.58 },
    { month: "May-23", value: 12.09 },
    { month: "Jun-23", value: 11.33 },
    { month: "Sep-23", value: 8.14 },
  ];

  const vehicleData = [
    { month: "Apr-23", vehicles: 42, tat: 13.18 },
    { month: "May-23", vehicles: 304, tat: 13.76 },
    { month: "Jun-23", vehicles: 286, tat: 12.47 },
    { month: "Jul-23", vehicles: 184, tat: 8.32 },
    { month: "Aug-23", vehicles: 81, tat: 8.32 },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-teal-50 border-2 border-teal-400">
        <div className="bg-teal-500 text-white p-3 rounded mb-4">
          <h2 className="text-lg font-bold">TTAT – PERFORMANCE | REPORT</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-4 bg-green-100">
            <h3 className="font-semibold mb-4 text-green-700">Trends - Average TTAT for RM (Hrs.)</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="rm" fill="#DC2626" />
                  <Line type="monotone" dataKey="target" stroke="#000000" strokeDasharray="5 5" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-4 bg-green-100">
            <h3 className="font-semibold mb-4 text-green-700">Average TTAT - Vehicles Stayed at Night (Top-11)</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={vehicleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="vehicles" fill="#DC2626" />
                  <Line type="monotone" dataKey="tat" stroke="#000000" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="p-4 bg-green-100 mt-4">
          <h3 className="font-semibold mb-4 text-green-700">Trends - Average TTAT for Top-11 Materials (Hrs.)</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={materialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </Card>
    </div>
  );
}

function VehicleInspectionDeviationDashboard() {
  const inspectionData = [
    { id: 1, material: "Manganese Sulphate Solution 29.5%", total: 410, inspected: 410, passed: 409, ftp: "99.76", deviation: "-", deviationPercent: "-", rejected: "-", rejectedPercent: "-", aborted: "-", abortedPercent: "-" },
    { id: 2, material: "Ammonia Solution 24%", total: 177, inspected: 177, passed: 176, ftp: "99.44", deviation: "-", deviationPercent: "-", rejected: "-", rejectedPercent: "-", aborted: "-", abortedPercent: "-" },
    { id: 3, material: "Salt (grade-I)", total: 163, inspected: 163, passed: 163, ftp: "100", deviation: "-", deviationPercent: "-", rejected: "-", rejectedPercent: "-", aborted: "-", abortedPercent: "-" },
    { id: 4, material: "Caustic Soda Lye - 45% Solution", total: 124, inspected: 124, passed: 124, ftp: "100", deviation: "-", deviationPercent: "-", rejected: "-", rejectedPercent: "-", aborted: "-", abortedPercent: "-" },
    { id: 5, material: "Hi Chloron", total: 106, inspected: 106, passed: 105, ftp: "99.06", deviation: "-", deviationPercent: "-", rejected: "-", rejectedPercent: "-", aborted: "-", abortedPercent: "-" },
    { id: 6, material: "Methanol", total: 90, inspected: 90, passed: 90, ftp: "100", deviation: "-", deviationPercent: "-", rejected: "-", rejectedPercent: "-", aborted: "-", abortedPercent: "-" },
    { id: 7, material: "Ethylene Diamine (eda)", total: 92, inspected: 90, passed: 90, ftp: "100", deviation: "-", deviationPercent: "-", rejected: "2", rejectedPercent: "2.17", aborted: "-", abortedPercent: "-" },
    { id: 8, material: "Zinc Sulphate - Solution ( 13% )", total: 75, inspected: 75, passed: 73, ftp: "97.33", deviation: "2", deviationPercent: "2.67", rejected: "2", rejectedPercent: "-", aborted: "-", abortedPercent: "-" },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-teal-50 border-2 border-teal-400">
        <div className="bg-teal-500 text-white p-3 rounded mb-4">
          <h2 className="text-lg font-bold">VEHICLE INSPECTION & DEVIATION (QA) | REPORT</h2>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-600">
                <TableHead className="text-white text-xs">Sr. No</TableHead>
                <TableHead className="text-white text-xs">Material</TableHead>
                <TableHead className="text-white text-xs">Total Vehicles</TableHead>
                <TableHead className="text-white text-xs">Lots Inspected</TableHead>
                <TableHead className="text-white text-xs">Lots Passed</TableHead>
                <TableHead className="text-white text-xs">FTP %</TableHead>
                <TableHead className="text-white text-xs">Deviation</TableHead>
                <TableHead className="text-white text-xs">Deviation %</TableHead>
                <TableHead className="text-white text-xs">Rejected</TableHead>
                <TableHead className="text-white text-xs">Rejected %</TableHead>
                <TableHead className="text-white text-xs">Aborted</TableHead>
                <TableHead className="text-white text-xs">Aborted %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inspectionData.map((row) => (
                <TableRow key={row.id} className="hover:bg-gray-50">
                  <TableCell className="text-xs">{row.id}</TableCell>
                  <TableCell className="text-xs font-medium">{row.material}</TableCell>
                  <TableCell className="text-xs text-center">{row.total}</TableCell>
                  <TableCell className="text-xs text-center">{row.inspected}</TableCell>
                  <TableCell className="text-xs text-center">{row.passed}</TableCell>
                  <TableCell className="text-xs text-center">{row.ftp}</TableCell>
                  <TableCell className="text-xs text-center">{row.deviation}</TableCell>
                  <TableCell className="text-xs text-center">{row.deviationPercent}</TableCell>
                  <TableCell className="text-xs text-center">{row.rejected}</TableCell>
                  <TableCell className="text-xs text-center">{row.rejectedPercent}</TableCell>
                  <TableCell className="text-xs text-center">{row.aborted}</TableCell>
                  <TableCell className="text-xs text-center">{row.abortedPercent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

function TTATVehicleNightReductionDashboard() {
  const contributorData = [
    { material: "Acetic", jul: 14.54, aug: 5.1, sep: 11.09, oct: 12.58, nov: 7.84, dec: null },
    { material: "Ammonia", jul: null, aug: null, sep: null, oct: null, nov: null, dec: null },
    { material: "Ethwox", jul: 50.61, aug: 17.31, sep: 15.65, oct: 11.14, nov: 6.65, dec: null },
    { material: "Methyl", jul: null, aug: null, sep: null, oct: null, nov: null, dec: null },
    { material: "Salt", jul: 20.31, aug: 8.14, sep: 6.16, oct: 8.34, nov: 6.54, dec: 6.76 },
  ];

  const vehicleCountData = [
    { material: "Acetic", jul: 76, aug: 62, sep: 90, oct: 73, nov: 32, dec: 37 },
    { material: "Ammonia", jul: 10, aug: 0, sep: 0, oct: 0, nov: 11, dec: 1 },
    { material: "Ethwox", jul: 43, aug: null, sep: null, oct: null, nov: null, dec: null },
    { material: "Methyl", jul: null, aug: null, sep: null, oct: null, nov: null, dec: null },
    { material: "Salt", jul: 84, aug: null, sep: null, oct: null, nov: null, dec: null },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-teal-50 border-2 border-teal-400">
        <div className="bg-teal-500 text-white p-3 rounded mb-4">
          <h2 className="text-lg font-bold">TTAT – REDUCTION IN VEHICLE STAY AT NIGHT | REPORT</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-4 bg-green-100">
            <h3 className="font-semibold mb-4 text-green-700">Trends - Average TTAT for TOP 11 Contributors (Hrs.)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={contributorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="material" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="jul" fill="#3B82F6" />
                  <Bar dataKey="aug" fill="#06B6D4" />
                  <Bar dataKey="sep" fill="#10B981" />
                  <Line type="monotone" dataKey="sep" stroke="#059669" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm">JULY 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                <span className="text-sm">AUGUST 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm">SEPTEMBER 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                <span className="text-sm">Positive Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm">Negative Growth</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-green-100">
            <h3 className="font-semibold mb-4 text-green-700">Trends - No. of Vehicles Stayed at Night</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={vehicleCountData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="material" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="jul" fill="#3B82F6" />
                  <Bar dataKey="aug" fill="#06B6D4" />
                  <Bar dataKey="sep" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}

function TATPastDataAnalysisDashboard() {
  const tatData = [
    { type: "Tanker", vehicles: 1809, avgTat: 11.85, weightage: 5.89 },
    { type: "Truck", vehicles: 1193, avgTat: 7.62, weightage: 3.85 },
    { type: "Iso Tank", vehicles: 251, avgTat: 11.98, weightage: 6.06 },
    { type: "40 Feet", vehicles: 294, avgTat: 11.73, weightage: 5.93 },
    { type: "Total", vehicles: 3953, avgTat: 10.18, weightage: 100 },
  ];

  const contributionData = [
    { name: "Tanker", value: 39.06, color: "#EC4899" },
    { name: "Truck", value: 32.49, color: "#06B6D4" },
    { name: "Other", value: 28.45, color: "#10B981" },
  ];

  const materialData = [
    { material: "Tanker", vehicles: 1809, avgTat: 11.85 },
    { material: "Truck", vehicles: 1193, avgTat: 7.62 },
    { material: "Iso Tank", vehicles: 251, avgTat: 11.98 },
    { material: "40 Feet", vehicles: 294, avgTat: 11.73 },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-teal-50 border-2 border-teal-400">
        <div className="bg-teal-500 text-white p-3 rounded mb-4">
          <h2 className="text-lg font-bold">TAT PAST DATA ANALYSIS | REPORT</h2>
        </div>
        
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-slate-700 text-white p-3 rounded text-center">
            <div className="text-xs">Previous Year AVG TAT (in Hrs.)</div>
            <div className="text-xl font-bold">0</div>
          </div>
          <div className="bg-green-600 text-white p-3 rounded text-center">
            <div className="text-xs">Current Year AVG TAT (in Hrs.)</div>
            <div className="text-xl font-bold">12.63</div>
          </div>
          <div className="bg-gray-500 text-white p-3 rounded text-center">
            <div className="text-xs">Previous Month AVG TAT (in Hrs.)</div>
            <div className="text-xl font-bold">11.18</div>
          </div>
          <div className="bg-green-600 text-white p-3 rounded text-center">
            <div className="text-xs">Current Month AVG TAT (in Hrs.)</div>
            <div className="text-xl font-bold">10.18</div>
          </div>
          <div className="bg-teal-600 text-white p-3 rounded text-center">
            <div className="text-xs">Today AVG TAT (in Hrs.)</div>
            <div className="text-xl font-bold">3.34</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-600">
                  <TableHead className="text-white text-xs">Vehicle Type</TableHead>
                  <TableHead className="text-white text-xs">Avg TAT (in Hrs)</TableHead>
                  <TableHead className="text-white text-xs">Inward to 1st wt (in Hrs)</TableHead>
                  <TableHead className="text-white text-xs">1st wt to 2nd wt (in Hrs)</TableHead>
                  <TableHead className="text-white text-xs">2nd wt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tatData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-xs font-medium">{row.type}</TableCell>
                    <TableCell className="text-xs text-center">{row.avgTat}</TableCell>
                    <TableCell className="text-xs text-center">{index === 0 ? "1.20" : index === 1 ? "0.81" : index === 2 ? "1.21" : index === 3 ? "1.69" : "1.11"}</TableCell>
                    <TableCell className="text-xs text-center">{index === 0 ? "8.51" : index === 1 ? "5.06" : index === 2 ? "9.60" : index === 3 ? "8.12" : "7.48"}</TableCell>
                    <TableCell className="text-xs text-center">-</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Card className="p-4">
              <h4 className="font-semibold mb-4">TAT Contribution (%)</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={contributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label={({ value }) => `${value}%`}
                    >
                      {contributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-600">
                  <TableHead className="text-white text-xs">Vehicle Type</TableHead>
                  <TableHead className="text-white text-xs">Vehicles</TableHead>
                  <TableHead className="text-white text-xs">Avg TAT (in Hrs)</TableHead>
                  <TableHead className="text-white text-xs">Weightage %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tatData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-xs font-medium">{row.type}</TableCell>
                    <TableCell className="text-xs text-center">{row.vehicles}</TableCell>
                    <TableCell className="text-xs text-center">{row.avgTat}</TableCell>
                    <TableCell className="text-xs text-center">{row.weightage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Card className="p-4">
              <h4 className="font-semibold mb-4">Material Group Wise Vehicle Count & Average TAT</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={materialData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="material" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="vehicles" fill="#3B82F6" />
                    <Line type="monotone" dataKey="avgTat" stroke="#EF4444" strokeWidth={2} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}

function TTATQAVehicleTypeDashboard() {
  const vehicleTypeData = [
    { type: "ISO TANK", consignments2023: 369, avgTime2023: 4.59, consignmentsYTD: 1229, avgTimeYTD: 4.79, totalTATYTD: 12.77, costQATime: 37.67 },
    { type: "TANKER", consignments2023: 1264, avgTime2023: 1.32, consignmentsYTD: 2679, avgTimeYTD: 1.82, totalTATYTD: 11.71, costQATime: 15.52 },
    { type: "TEMPO 6 TON", consignments2023: 1, avgTime2023: 1.43, consignmentsYTD: 1, avgTimeYTD: 1.43, totalTATYTD: 32.18, costQATime: 4.44 },
    { type: "TRUCK", consignments2023: 193, avgTime2023: 3.96, consignmentsYTD: 764, avgTimeYTD: 3.67, totalTATYTD: 9.44, costQATime: 38.87 },
    { type: "SOFT CONTAINER", consignments2023: 1, avgTime2023: 1.13, consignmentsYTD: 4, avgTimeYTD: 1.37, totalTATYTD: 6.76, costQATime: 20.23 },
    { type: "OTHER", consignments2023: 2, avgTime2023: 0.71, consignmentsYTD: 9, avgTimeYTD: 3.14, totalTATYTD: 6.11, costQATime: 51.39 },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-teal-50 border-2 border-teal-400">
        <div className="bg-teal-500 text-white p-3 rounded mb-4">
          <h2 className="text-lg font-bold">TTAT (QA) VEHICLE TYPE | REPORT</h2>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-600">
                <TableHead className="text-white text-xs w-16"></TableHead>
                <TableHead className="text-white text-xs">Vehicle Type</TableHead>
                <TableHead className="text-white text-xs">No. of Consignment in AUG'23</TableHead>
                <TableHead className="text-white text-xs">Wtd Avg QA Time (Hrs.)</TableHead>
                <TableHead className="text-white text-xs">No. of Consignment YTD</TableHead>
                <TableHead className="text-white text-xs">Wtd Avg QA Time (Hrs.) YTD</TableHead>
                <TableHead className="text-white text-xs">Avg Total TAT (YTD)</TableHead>
                <TableHead className="text-white text-xs">% Contb of QA Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicleTypeData.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="text-xs text-center">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                      {/* Vehicle icon placeholder */}
                      <div className="w-6 h-4 bg-white rounded-sm"></div>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs font-medium">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded">{row.type}</div>
                  </TableCell>
                  <TableCell className="text-xs text-center">{row.consignments2023}</TableCell>
                  <TableCell className="text-xs text-center">{row.avgTime2023}</TableCell>
                  <TableCell className="text-xs text-center">{row.consignmentsYTD}</TableCell>
                  <TableCell className="text-xs text-center">{row.avgTimeYTD}</TableCell>
                  <TableCell className="text-xs text-center">{row.totalTATYTD}</TableCell>
                  <TableCell className="text-xs text-center">{row.costQATime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
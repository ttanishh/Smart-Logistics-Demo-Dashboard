import { useState } from "react";
import { ArrowLeft, Wifi, WifiOff, Activity, Battery, Thermometer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sensorData = [
  { time: "00:00", temp: 22, humidity: 45, vibration: 0.2 },
  { time: "04:00", temp: 21, humidity: 48, vibration: 0.3 },
  { time: "08:00", temp: 25, humidity: 42, vibration: 0.5 },
  { time: "12:00", temp: 28, humidity: 38, vibration: 0.4 },
  { time: "16:00", temp: 30, humidity: 35, vibration: 0.6 },
  { time: "20:00", temp: 26, humidity: 40, vibration: 0.3 },
];

const deviceData = [
  { id: "DEV001", name: "Temperature Sensor A", status: "Online", battery: 87, location: "Plant A - Loading Bay" },
  { id: "DEV002", name: "GPS Tracker V1", status: "Online", battery: 92, location: "Vehicle VH001" },
  { id: "DEV003", name: "Pressure Monitor", status: "Offline", battery: 23, location: "Plant B - Storage" },
  { id: "DEV004", name: "Vibration Sensor", status: "Online", battery: 76, location: "Vehicle VH003" },
  { id: "DEV005", name: "Humidity Monitor", status: "Online", battery: 94, location: "Plant C - Warehouse" },
  { id: "DEV006", name: "Motion Detector", status: "Warning", battery: 45, location: "Plant A - Entrance" },
];

export default function IOTHubPage() {
  const navigate = useNavigate();

  const metrics = [
    { title: "Connected Devices", value: "24", icon: Wifi, trend: "+2 today", trendUp: true },
    { title: "Offline Devices", value: "3", icon: WifiOff, trend: "1 critical", trendUp: false },
    { title: "Active Sensors", value: "18", icon: Activity, trend: "98% uptime", trendUp: true },
    { title: "Low Battery", value: "5", icon: Battery, trend: "2 urgent", trendUp: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header title="IOT Hub" showBreadcrumb />
      
      <main className="container mx-auto px-6 py-6">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => navigate("/")} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Applications
          </Button>
          <h1 className="text-2xl font-bold">IOT Device Management</h1>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Sensor Data Chart */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Real-time Sensor Data</h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Temperature</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Humidity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Vibration</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="humidity" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="vibration" stroke="#f97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Device Status Table */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Device Status Overview</h3>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Battery</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deviceData.map((device) => (
                  <TableRow key={device.id}>
                    <TableCell className="font-medium">{device.id}</TableCell>
                    <TableCell>{device.name}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        device.status === "Online" ? "bg-green-100 text-green-800" :
                        device.status === "Offline" ? "bg-red-100 text-red-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {device.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          device.battery > 60 ? "bg-green-500" :
                          device.battery > 30 ? "bg-yellow-500" : "bg-red-500"
                        }`}></div>
                        {device.battery}%
                      </div>
                    </TableCell>
                    <TableCell>{device.location}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
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
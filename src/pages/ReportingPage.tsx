import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DashboardRenderer } from "@/components/DashboardRenderer";
import { NavigationBar } from "@/components/NavigationBar";

export default function ReportingPage() {
  const [reportSearchTerm, setReportSearchTerm] = useState("");
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null);

  const dashboards = [
    { title: "Governance Dashboard", key: "governance" },
    { title: "TTAT Dashboard", key: "ttat" },
    { title: "Security Dashboard", key: "security" },
    { title: "LIVE In-Plant Dashboard", key: "live-inplant" },
    { title: "Plant Dashboard", key: "plant" },
    { title: "Month Actual Vs Target TT Dashboard", key: "month-actual" },
    { title: "QA Dashboard", key: "qa" },
    { title: "Drill Down Dashboard", key: "drill-down" },
    { title: "Deviation Dashboard", key: "deviation" },
  ];

  const reports = [
    { title: "TTAT(QA) Material", key: "ttat-qa-material" },
    { title: "TTAT - Performance Report", key: "ttat-performance" },
    { title: "Vehicle Inspection & Deviation (QA)", key: "vehicle-inspection-deviation" },
    { title: "TTAT - Reduction in Vehicles Stay at Night", key: "ttat-vehicle-night-reduction" },
    { title: "TAT Past Data Analysis", key: "tat-past-data-analysis" },
    { title: "TTAT (QA) Vehicle Type", key: "ttat-qa-vehicle-type" },
  ];

  if (selectedDashboard) {
    return <DashboardRenderer dashboardKey={selectedDashboard} onBack={() => setSelectedDashboard(null)} />;
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <NavigationBar title="SMART LOGISTICS / REPORTING" />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Left Sidebar - Reports */}
          <div className="space-y-4">
            <Card className="p-4 bg-purple-100">
              <h2 className="text-lg font-bold text-purple-800 mb-4">Reports</h2>
              <div className="space-y-2">
                {reports.map((report) => (
                  <Button
                    key={report.key}
                    variant="ghost"
                    className="w-full justify-start bg-purple-600 text-white hover:bg-purple-700"
                    onClick={() => setSelectedDashboard(report.key)}
                  >
                    {report.title} →
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Content - Dashboards */}
          <div className="col-span-3">
            <Card className="p-6 bg-purple-50">
              <h2 className="text-lg font-bold text-purple-800 mb-6">Dashboards</h2>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {dashboards.map((dashboard) => (
                  <Button
                    key={dashboard.key}
                    variant="outline"
                    className="p-4 h-auto bg-blue-100 hover:bg-blue-200 border-blue-300"
                    onClick={() => setSelectedDashboard(dashboard.key)}
                  >
                    <div className="text-center">
                      <div className="text-sm font-medium text-blue-800">
                        {dashboard.title}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              {/* Search Section */}
              <div className="flex items-center gap-4 mb-6">
                <Input
                  placeholder="Search in Reports"
                  value={reportSearchTerm}
                  onChange={(e) => setReportSearchTerm(e.target.value)}
                  className="max-w-md"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  SEARCH
                </Button>
              </div>

              {/* Large Content Area */}
              <div className="bg-orange-100 rounded-lg p-8 min-h-96">
                <div className="text-center text-gray-500">
                  <p>Select a dashboard or report to view its content</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
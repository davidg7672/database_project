import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

function StatisticsPage() {
    const [activeTab, setActiveTab] = useState("overview");

    // Fake data for all statistics
    const overviewData = {
        totalRevenue: 1250000,
        totalJobs: 342,
        activeEmployees: 28,
        customerSatisfaction: 4.7,
        monthlyGrowth: 12.5,
        completionRate: 94.2,
        avgJobValue: 3655,
        repeatCustomers: 68.3
    };

    const financialData = [
        { month: "Jan", revenue: 85000, profit: 25500, costs: 59500, jobs: 28 },
        { month: "Feb", revenue: 92000, profit: 27600, costs: 64400, jobs: 31 },
        { month: "Mar", revenue: 105000, profit: 31500, costs: 73500, jobs: 35 },
        { month: "Apr", revenue: 118000, profit: 35400, costs: 82600, jobs: 39 },
        { month: "May", revenue: 135000, profit: 40500, costs: 94500, jobs: 45 },
        { month: "Jun", revenue: 142000, profit: 42600, costs: 99400, jobs: 47 },
        { month: "Jul", revenue: 155000, profit: 46500, costs: 108500, jobs: 52 },
        { month: "Aug", revenue: 148000, profit: 44400, costs: 103600, jobs: 49 },
        { month: "Sep", revenue: 132000, profit: 39600, costs: 92400, jobs: 44 },
        { month: "Oct", revenue: 125000, profit: 37500, costs: 87500, jobs: 42 },
        { month: "Nov", revenue: 98000, profit: 29400, costs: 68600, jobs: 33 },
        { month: "Dec", revenue: 89000, profit: 26700, costs: 62300, jobs: 30 }
    ];

    const operationsData = [
        { metric: "Truck Utilization", value: 87.3, target: 85, unit: "%" },
        { metric: "Employee Utilization", value: 92.1, target: 90, unit: "%" },
        { metric: "Avg Job Duration", value: 4.2, target: 4.0, unit: "hrs" },
        { metric: "Jobs per Day", value: 11.4, target: 12, unit: "jobs" },
        { metric: "Fuel Efficiency", value: 8.7, target: 8.5, unit: "mpg" },
        { metric: "Equipment Downtime", value: 2.1, target: 3, unit: "%" }
    ];

    const customerData = [
        { ageGroup: "18-25", count: 45, percentage: 13.2, avgSpend: 2800 },
        { ageGroup: "26-35", count: 98, percentage: 28.7, avgSpend: 3200 },
        { ageGroup: "36-45", count: 112, percentage: 32.7, avgSpend: 3800 },
        { ageGroup: "46-55", count: 67, percentage: 19.6, avgSpend: 4200 },
        { ageGroup: "56-65", count: 20, percentage: 5.8, avgSpend: 3600 }
    ];

    const employeePerformance = [
        { id: 1, name: "John Doe", jobsCompleted: 45, avgRating: 4.8, hoursWorked: 168, efficiency: 95.2 },
        { id: 2, name: "Jane Smith", jobsCompleted: 42, avgRating: 4.9, hoursWorked: 165, efficiency: 98.1 },
        { id: 3, name: "Mike Johnson", jobsCompleted: 38, avgRating: 4.6, hoursWorked: 160, efficiency: 92.3 },
        { id: 4, name: "Sarah Wilson", jobsCompleted: 41, avgRating: 4.7, hoursWorked: 162, efficiency: 94.5 },
        { id: 5, name: "David Brown", jobsCompleted: 39, avgRating: 4.8, hoursWorked: 158, efficiency: 96.8 },
        { id: 6, name: "Emily Davis", jobsCompleted: 36, avgRating: 4.5, hoursWorked: 155, efficiency: 89.2 },
        { id: 7, name: "Alex Rodriguez", jobsCompleted: 44, avgRating: 4.9, hoursWorked: 170, efficiency: 97.5 },
        { id: 8, name: "Lisa Chen", jobsCompleted: 37, avgRating: 4.6, hoursWorked: 159, efficiency: 91.7 }
    ];

    const trendsData = {
        revenueGrowth: [5.2, 8.1, 12.3, 15.7, 18.9, 22.1, 25.4, 23.8, 19.6, 16.2, 11.8, 8.5],
        jobVolume: [28, 31, 35, 39, 45, 47, 52, 49, 44, 42, 33, 30],
        customerSatisfaction: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.7, 4.8, 4.7, 4.6, 4.5, 4.7]
    };

    const employeeColumns = [
        { field: "name", headerName: "Employee", width: 150 },
        { field: "jobsCompleted", headerName: "Jobs Completed", type: "number", width: 130 },
        { field: "avgRating", headerName: "Avg Rating", type: "number", width: 120, valueFormatter: (value) => value?.toFixed(1) },
        { field: "hoursWorked", headerName: "Hours Worked", type: "number", width: 130 },
        { field: "efficiency", headerName: "Efficiency", type: "number", width: 120, valueFormatter: (value) => `${value?.toFixed(1)}%` }
    ];

    const renderOverviewTab = () => (
        <div className="space-y-6">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Total Revenue</h2>
                        <p className="text-3xl font-bold">${overviewData.totalRevenue.toLocaleString()}</p>
                        <p className="text-xs text-success">+{overviewData.monthlyGrowth}% this month</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Total Jobs</h2>
                        <p className="text-3xl font-bold">{overviewData.totalJobs}</p>
                        <p className="text-xs text-success">{overviewData.completionRate}% completion rate</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Customer Satisfaction</h2>
                        <p className="text-3xl font-bold">{overviewData.customerSatisfaction}/5</p>
                        <p className="text-xs text-success">Excellent rating</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Avg Job Value</h2>
                        <p className="text-3xl font-bold">${overviewData.avgJobValue.toLocaleString()}</p>
                        <p className="text-xs text-success">{overviewData.repeatCustomers}% repeat customers</p>
                    </div>
                </div>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">Monthly Performance</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Revenue Growth</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-32 bg-base-200 rounded-full h-2">
                                        <div className="bg-success h-2 rounded-full" style={{width: `${overviewData.monthlyGrowth}%`}}></div>
                                    </div>
                                    <span className="text-sm font-medium">{overviewData.monthlyGrowth}%</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Job Completion Rate</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-32 bg-base-200 rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{width: `${overviewData.completionRate}%`}}></div>
                                    </div>
                                    <span className="text-sm font-medium">{overviewData.completionRate}%</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Customer Retention</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-32 bg-base-200 rounded-full h-2">
                                        <div className="bg-info h-2 rounded-full" style={{width: `${overviewData.repeatCustomers}%`}}></div>
                                    </div>
                                    <span className="text-sm font-medium">{overviewData.repeatCustomers}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{overviewData.activeEmployees}</div>
                                <div className="text-sm opacity-60">Active Employees</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary">342</div>
                                <div className="text-sm opacity-60">Total Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent">12</div>
                                <div className="text-sm opacity-60">Active Trucks</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-info">98.5%</div>
                                <div className="text-sm opacity-60">On-Time Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderFinancialTab = () => (
        <div className="space-y-6">
            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Total Revenue (YTD)</h2>
                        <p className="text-3xl font-bold">${financialData.reduce((sum, month) => sum + month.revenue, 0).toLocaleString()}</p>
                        <p className="text-xs text-success">+15.2% vs last year</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Total Profit (YTD)</h2>
                        <p className="text-3xl font-bold">${financialData.reduce((sum, month) => sum + month.profit, 0).toLocaleString()}</p>
                        <p className="text-xs text-success">24% profit margin</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Avg Monthly Revenue</h2>
                        <p className="text-3xl font-bold">${Math.round(financialData.reduce((sum, month) => sum + month.revenue, 0) / 12).toLocaleString()}</p>
                        <p className="text-xs text-info">Peak in July</p>
                    </div>
                </div>
            </div>

            {/* Monthly Financial Data Table */}
            <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                    <h3 className="text-lg font-semibold mb-4">Monthly Financial Breakdown</h3>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Revenue</th>
                                    <th>Profit</th>
                                    <th>Costs</th>
                                    <th>Jobs</th>
                                    <th>Avg Job Value</th>
                                    <th>Profit Margin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {financialData.map((month, index) => (
                                    <tr key={index}>
                                        <td className="font-medium">{month.month}</td>
                                        <td>${month.revenue.toLocaleString()}</td>
                                        <td className="text-success">${month.profit.toLocaleString()}</td>
                                        <td className="text-error">${month.costs.toLocaleString()}</td>
                                        <td>{month.jobs}</td>
                                        <td>${Math.round(month.revenue / month.jobs).toLocaleString()}</td>
                                        <td className="text-success">{((month.profit / month.revenue) * 100).toFixed(1)}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderOperationsTab = () => (
        <div className="space-y-6">
            {/* Operations Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {operationsData.map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-sm font-medium opacity-60">{item.metric}</h2>
                            <p className="text-3xl font-bold">{item.value}{item.unit}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-full bg-base-200 rounded-full h-2">
                                    <div 
                                        className={`h-2 rounded-full ${item.value >= item.target ? 'bg-success' : 'bg-warning'}`}
                                        style={{width: `${Math.min((item.value / item.target) * 100, 100)}%`}}
                                    ></div>
                                </div>
                                <span className="text-xs opacity-60">Target: {item.target}{item.unit}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Efficiency Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">Resource Utilization</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm">Truck Utilization</span>
                                    <span className="text-sm font-medium">87.3%</span>
                                </div>
                                <div className="w-full bg-base-200 rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{width: '87.3%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm">Employee Utilization</span>
                                    <span className="text-sm font-medium">92.1%</span>
                                </div>
                                <div className="w-full bg-base-200 rounded-full h-2">
                                    <div className="bg-success h-2 rounded-full" style={{width: '92.1%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm">Equipment Downtime</span>
                                    <span className="text-sm font-medium">2.1%</span>
                                </div>
                                <div className="w-full bg-base-200 rounded-full h-2">
                                    <div className="bg-error h-2 rounded-full" style={{width: '2.1%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Average Job Duration</span>
                                <span className="badge badge-primary">4.2 hrs</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Jobs per Day</span>
                                <span className="badge badge-secondary">11.4</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Fuel Efficiency</span>
                                <span className="badge badge-accent">8.7 mpg</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>On-Time Delivery</span>
                                <span className="badge badge-success">98.5%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCustomersTab = () => (
        <div className="space-y-6">
            {/* Customer Demographics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">Age Demographics</h3>
                        <div className="space-y-3">
                            {customerData.map((group, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-sm">{group.ageGroup}</span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-24 bg-base-200 rounded-full h-2">
                                            <div 
                                                className="bg-primary h-2 rounded-full" 
                                                style={{width: `${group.percentage}%`}}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-medium w-12">{group.percentage}%</span>
                                        <span className="text-sm opacity-60">({group.count})</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">Customer Value by Age</h3>
                        <div className="space-y-3">
                            {customerData.map((group, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-sm">{group.ageGroup}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium">${group.avgSpend.toLocaleString()}</span>
                                        <div className="w-16 bg-base-200 rounded-full h-2">
                                            <div 
                                                className="bg-secondary h-2 rounded-full" 
                                                style={{width: `${(group.avgSpend / 4500) * 100}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body text-center">
                        <h2 className="text-sm font-medium opacity-60">Total Customers</h2>
                        <p className="text-3xl font-bold">342</p>
                        <p className="text-xs text-success">+23 this month</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body text-center">
                        <h2 className="text-sm font-medium opacity-60">Repeat Rate</h2>
                        <p className="text-3xl font-bold">68.3%</p>
                        <p className="text-xs text-success">Excellent retention</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body text-center">
                        <h2 className="text-sm font-medium opacity-60">Avg Customer Value</h2>
                        <p className="text-3xl font-bold">$3,655</p>
                        <p className="text-xs text-info">Lifetime value</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body text-center">
                        <h2 className="text-sm font-medium opacity-60">Satisfaction Score</h2>
                        <p className="text-3xl font-bold">4.7/5</p>
                        <p className="text-xs text-success">Outstanding</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderEmployeesTab = () => (
        <div className="space-y-6">
            {/* Employee Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body text-center">
                        <h2 className="text-sm font-medium opacity-60">Total Employees</h2>
                        <p className="text-3xl font-bold">28</p>
                        <p className="text-xs text-success">+2 this quarter</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body text-center">
                        <h2 className="text-sm font-medium opacity-60">Avg Rating</h2>
                        <p className="text-3xl font-bold">4.7/5</p>
                        <p className="text-xs text-success">Excellent performance</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body text-center">
                        <h2 className="text-sm font-medium opacity-60">Avg Efficiency</h2>
                        <p className="text-3xl font-bold">94.2%</p>
                        <p className="text-xs text-success">Above target</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body text-center">
                        <h2 className="text-sm font-medium opacity-60">Retention Rate</h2>
                        <p className="text-3xl font-bold">96.4%</p>
                        <p className="text-xs text-success">Very high</p>
                    </div>
                </div>
            </div>

            {/* Employee Performance Table */}
            <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                    <h3 className="text-lg font-semibold mb-4">Employee Performance Details</h3>
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            rows={employeePerformance}
                            columns={employeeColumns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 10 },
                                },
                            }}
                            pageSizeOptions={[5, 10, 25]}
                            disableRowSelectionOnClick
                            sx={{
                                border: "none",
                                "& .MuiDataGrid-cell:focus": {
                                    outline: "none",
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTrendsTab = () => (
        <div className="space-y-6">
            {/* Trend Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Revenue Growth</h2>
                        <p className="text-3xl font-bold text-success">+25.4%</p>
                        <p className="text-xs text-success">Peak in July</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Job Volume Trend</h2>
                        <p className="text-3xl font-bold text-primary">+85.7%</p>
                        <p className="text-xs text-info">From Jan to Jul</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="text-sm font-medium opacity-60">Satisfaction Trend</h2>
                        <p className="text-3xl font-bold text-secondary">+11.9%</p>
                        <p className="text-xs text-success">Steady improvement</p>
                    </div>
                </div>
            </div>

            {/* Monthly Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">Revenue Growth by Month</h3>
                        <div className="space-y-2">
                            {trendsData.revenueGrowth.map((growth, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-sm">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}</span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-32 bg-base-200 rounded-full h-2">
                                            <div 
                                                className="bg-success h-2 rounded-full" 
                                                style={{width: `${Math.min(growth * 4, 100)}%`}}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-medium w-12">{growth}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="text-lg font-semibold mb-4">Job Volume by Month</h3>
                        <div className="space-y-2">
                            {trendsData.jobVolume.map((volume, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-sm">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}</span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-32 bg-base-200 rounded-full h-2">
                                            <div 
                                                className="bg-primary h-2 rounded-full" 
                                                style={{width: `${(volume / 52) * 100}%`}}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-medium w-12">{volume}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Satisfaction Trend */}
            <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                    <h3 className="text-lg font-semibold mb-4">Customer Satisfaction Trend</h3>
                    <div className="space-y-2">
                        {trendsData.customerSatisfaction.map((rating, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-sm">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-32 bg-base-200 rounded-full h-2">
                                        <div 
                                            className="bg-secondary h-2 rounded-full" 
                                            style={{width: `${(rating / 5) * 100}%`}}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium w-12">{rating}/5</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-base-content mb-2">
                        Statistics & Analytics
                    </h1>
                    <p className="text-base-content/70">
                        Comprehensive insights into your moving company's performance
                    </p>
                </div>

                {/* Tabs */}
                <div className="tabs tabs-boxed bg-base-100 mb-6">
                    <button
                        className={`tab ${activeTab === "overview" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("overview")}
                    >
                        Overview
                    </button>
                    <button
                        className={`tab ${activeTab === "financial" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("financial")}
                    >
                        Financial
                    </button>
                    <button
                        className={`tab ${activeTab === "operations" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("operations")}
                    >
                        Operations
                    </button>
                    <button
                        className={`tab ${activeTab === "customers" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("customers")}
                    >
                        Customers
                    </button>
                    <button
                        className={`tab ${activeTab === "employees" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("employees")}
                    >
                        Employees
                    </button>
                    <button
                        className={`tab ${activeTab === "trends" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("trends")}
                    >
                        Trends
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === "overview" && renderOverviewTab()}
                {activeTab === "financial" && renderFinancialTab()}
                {activeTab === "operations" && renderOperationsTab()}
                {activeTab === "customers" && renderCustomersTab()}
                {activeTab === "employees" && renderEmployeesTab()}
                {activeTab === "trends" && renderTrendsTab()}
            </div>
        </div>
    );
}

export default StatisticsPage;

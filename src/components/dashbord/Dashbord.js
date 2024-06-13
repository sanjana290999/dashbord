import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ChartComponent from "../chart/Chart";

const Dashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // Fetch or generate the employee data
    const fetchData = async () => {
      // Here you can replace this with an actual API call
      const data = [
        { month: "January", count: 30 },
        { month: "February", count: 28 },
        { month: "March", count: 35 },
        { month: "April", count: 40 },
        { month: "May", count: 38 },
        { month: "June", count: 42 },
        { month: "July", count: 45 },
        { month: "August", count: 44 },
        { month: "September", count: 48 },
        { month: "October", count: 50 },
        { month: "November", count: 52 },
        { month: "December", count: 55 },
      ];
      setEmployeeData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 w-[80%]  ml-40 p-4">
          <h1 className="text-2xl font-semibold  mb-4">Dashboard</h1>
          <ChartComponent data={employeeData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

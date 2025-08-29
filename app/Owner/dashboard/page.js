"use client";
import { fetchChart } from "@/app/firebase";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";




export default function Dashboard() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function loadData() {
          const data = await fetchChart();
          setData(data);
        }
        loadData();
      }, []);
      // console.log(data);
      
  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Jumlah ID Terdaftar per Template</h2>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="template" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

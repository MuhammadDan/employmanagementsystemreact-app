import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { month: "Jan", Ujalakhan: 400, Muskankhan: 300, ShaikhBilal: 200, WaleedNiazi: 250, Maheenkhan: 150 },
    { month: "Feb", Ujalakhan: 450, Muskankhan: 350, ShaikhBilal: 250, WaleedNiazi: 300, Maheenkhan: 180 },
    { month: "Mar", Ujalakhan: 500, Muskankhan: 320, ShaikhBilal: 270, WaleedNiazi: 330, Maheenkhan: 200 },
    { month: "Apr", Ujalakhan: 480, Muskankhan: 360, ShaikhBilal: 290, WaleedNiazi: 350, Maheenkhan: 220 },
    { month: "May", Ujalakhan: 530, Muskankhan: 370, ShaikhBilal: 310, WaleedNiazi: 370, Maheenkhan: 240 },
    { month: "Jun", Ujalakhan: 550, Muskankhan: 400, ShaikhBilal: 330, WaleedNiazi: 390, Maheenkhan: 260 },
    { month: "Jul", Ujalakhan: 600, Muskankhan: 420, ShaikhBilal: 340, WaleedNiazi: 420, Maheenkhan: 280 },
    { month: "Aug", Ujalakhan: 620, Muskankhan: 430, ShaikhBilal: 350, WaleedNiazi: 440, Maheenkhan: 300 },
    { month: "Sep", Ujalakhan: 610, Muskankhan: 450, ShaikhBilal: 360, WaleedNiazi: 460, Maheenkhan: 320 },
    { month: "Oct", Ujalakhan: 580, Muskankhan: 440, ShaikhBilal: 370, WaleedNiazi: 480, Maheenkhan: 340 },
    { month: "Nov", Ujalakhan: 570, Muskankhan: 460, ShaikhBilal: 380, WaleedNiazi: 500, Maheenkhan: 360 },
    { month: "Dec", Ujalakhan: 590, Muskankhan: 470, ShaikhBilal: 390, WaleedNiazi: 520, Maheenkhan: 380 },
  ];
  

const Customchart = () => {
  return (
    <div className="w-full h-[350px] bg-gray-900 p-5 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-white mb-3">Employee Monthly Performance</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }} />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Line type="monotone" dataKey="Ujalakhan" stroke="#ff6363" strokeWidth={2} dot={{ fill: "#ff6363" }} />
          <Line type="monotone" dataKey="Muskankhan" stroke="#647eff" strokeWidth={2} dot={{ fill: "#647eff" }} />
          <Line type="monotone" dataKey="ShaikhBilal" stroke="#2ecc71" strokeWidth={2} dot={{ fill: "#2ecc71" }} />
          <Line type="monotone" dataKey="WaleedNiazi" stroke="#f39c12" strokeWidth={2} dot={{ fill: "#f39c12" }} />
          <Line type="monotone" dataKey="Maheenkhan" stroke="#9b59b6" strokeWidth={2} dot={{ fill: "#9b59b6" }} />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Customchart;

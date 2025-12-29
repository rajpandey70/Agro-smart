import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function WaterUsageChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/water-usage-by-crop")
      .then(res => setData(res.data))
      .catch(() => setData([]));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="crop" />
        <YAxis />
        <Tooltip />
        <Line dataKey="value" stroke="#2563eb" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}

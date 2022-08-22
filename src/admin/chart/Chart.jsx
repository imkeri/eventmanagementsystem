import "../css/chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Hidden } from "@mui/material";



const Chart = () => {
  const data = [
    { name: "Jan", Total: 1200 },
    { name: "Feb", Total: 2000 },
    { name: "Mar", Total: 800 },
    { name: "Apr", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
    { name: "July", Total: 1200 },
    { name: "aug", Total: 2100 },
    { name: "sep", Total: 800 },
    { name: "oct", Total: 1600 },
    { name: "nev", Total: 900 },
    { name: "dec", Total: 1700 },
  ];
return (
<ResponsiveContainer aspect={3}>
  <AreaChart
  data={data}
  padding={{bottom: 0}}
  margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#112363" stopOpacity={0.8} />
      <stop offset="95%" stopColor="#112363" stopOpacity={0} />
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke="gray" />
  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <Tooltip />
  <Area
    type="monotone"
    dataKey="Total"
    stroke="#8884d8"
    fillOpacity={1}
    fill="url(#total)"
  />
</AreaChart>
</ResponsiveContainer>
);
};
export default Chart;

import { useList } from "@refinedev/core";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const AccountBalancePlot = () => {
  const { data } = useList({
    resource: "balance_data",
  });

  const balanceData = data?.data ?? [];
  console.log(balanceData);

  return (
    <div className="w-full h-full">
      {data && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={balanceData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

export default function BarChartBox(props: Props) {
  return (
    <div className="bar_chart_box">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a3447", borderRadius: "4px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

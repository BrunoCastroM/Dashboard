import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import "./chartBox.scss";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

export default function ChartBox(props: Props) {
  return (
    <div className="chart_box">
      <div className="box_info">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>

        <h1>{props.number}</h1>

        <Link to="/" style={{ color: props.color }}>
          View All
        </Link>
      </div>
      <div className="chart_info">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "Limegreen" }}
          >
            {props.percentage}
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
}

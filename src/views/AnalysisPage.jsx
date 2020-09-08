import React from 'react';
import '../css/AnalysisPage.scss';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function AnalysisPage({ filteredData }) {
  const data = filteredData.map(txn => {
    return { name: txn.category, value: txn.amount }
  })

  const COLORS = filteredData.map(txn=>'#'+Math.floor(Math.random()*16777215).toString(16))

  return (
    <div className='analysisPage card'>
      <div className='header cardHeader'>
        Spend Analysis
      </div>
      <div className='content'>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

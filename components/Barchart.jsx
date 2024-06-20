import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Barchart(){
const data = [
  {
    name: 'Jan',
    uv: 3800,
    pv:4000,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv:2000,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv:1000,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv:2893,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv:1234,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv:3211,
    amt: 2500,
  },
  
];

    return (
      <ResponsiveContainer >
        <BarChart
          width={50}
          height={30}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="blue" activeBar={<Rectangle fill="blue" stroke="green" />} />
          <Bar dataKey="uv" fill="green" activeBar={<Rectangle fill="green" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  export default Barchart;
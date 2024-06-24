import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle,LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Barchart(){
const data = [
  {
    name: 'Jan',
    uv: 3800,
    
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
   
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
   
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    
    amt: 2500,
  },
  
];

    return (
      <ResponsiveContainer width="100%" height="100%" >
      <LineChart
        width={50}
        height={50}
        data={data}
        margin={{
          top: 40,
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
        <Line type="monotone" dataKey="pv" stroke="red" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="red" />
      </LineChart>
    </ResponsiveContainer>
    );
  }
  export default Barchart;
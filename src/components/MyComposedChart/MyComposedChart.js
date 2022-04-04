import React from 'react';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer,Tooltip, XAxis, YAxis } from 'recharts';

const MyComposedChart = ({data}) => {
    return (
        <div>
            <ResponsiveContainer width="95%" height={400}>
        <ComposedChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" barSize={20} fill="#8884d8" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
        </div>
    );
};

export default MyComposedChart;
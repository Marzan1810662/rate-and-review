import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StackedAreaChart = ({ data }) => {

    return (
        <ResponsiveContainer width="95%" height={400}>
            <AreaChart
                width={400} height={300}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stroke="#82ca8d"fill="#82ca9d" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default StackedAreaChart;
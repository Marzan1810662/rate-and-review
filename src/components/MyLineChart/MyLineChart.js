import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const MyLineChart = ({data}) => {
    
    return (
        <ResponsiveContainer width="95%" height={400}>

            <LineChart width={400} height={300} data={data}>
            <Line dataKey = {'investment'} >
            </Line>
            <Line dataKey = {'revenue'} stroke="#ff7300">
            </Line>
            <Tooltip/>
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='month'></XAxis>
            <YAxis></YAxis>
        </LineChart>
      </ResponsiveContainer>
    );
};

export default MyLineChart;
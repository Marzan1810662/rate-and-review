import React from 'react';
import useData from '../../hooks/useData';
import MyComposedChart from '../MyComposedChart/MyComposedChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyStackedAreaChart from '../MyStackedAreaChart/MyStackedAreaChart';
import MyStackedBarChart from '../MyStackedBarChart/MyStackedBarChart';
import './Dashboard.css'

const Dashboard = () => {
    const [data] = useData();
    return (
        <div className='container-md d-md-flex flex-md-wrap '>
            <div className=' chart-div'>
                <MyLineChart data={data}></MyLineChart>
            </div>
            <div className='chart-div'>
                <MyStackedAreaChart data={data}></MyStackedAreaChart>
            </div>
            <div className='chart-div'>
                <MyStackedBarChart data={data}></MyStackedBarChart>
            </div>
            <div className='chart-div'>
                <MyComposedChart data={data}></MyComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;
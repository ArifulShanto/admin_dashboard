import React from 'react';
import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import Widget from '../../components/Widget/Widget';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type = "user" />
                    <Widget type = "order" />
                    <Widget type = "earning" />
                    <Widget type = "balance" />
                </div>
                <div className="charts">
                    <Featured></Featured>
                    <Chart title = "Last 6 Months (Revenue)" aspect = {2/1}></Chart>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transaction</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;
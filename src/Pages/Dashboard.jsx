import React from 'react';
import Overview from '../Components/Overview';
import Analytics from '../Components/Analytics';
import Remainder from '../Components/Remainder';
import ProjectProgress from '../Components/ProjectProgress';
import TimeTracker from '../Components/TimeTracker';

const Dashboard = () => {
  return (
    <div className='border'>
      <Overview/>
      
      <div className='mt-3'>
        <Analytics/>
        <Remainder/>
        {/* <ProjectProgress/> */}
        <TimeTracker/>
      </div>
    </div>
  );
};

export default Dashboard;
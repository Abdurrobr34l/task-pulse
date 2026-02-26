import React from 'react';
import Overview from '../Components/Overview';
import Analytics from '../Components/Analytics';

const Dashboard = () => {
  return (
    <div className='border'>
      <Overview/>
      
      <div className='mt-3'>
        <Analytics/>
      </div>
    </div>
  );
};

export default Dashboard;
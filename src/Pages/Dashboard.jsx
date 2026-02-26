import React from 'react';
import Overview from '../Components/Overview';
import Analytics from '../Components/Analytics';
import Remainder from '../Components/Remainder';

const Dashboard = () => {
  return (
    <div className='border'>
      <Overview/>
      
      <div className='mt-3'>
        <Analytics/>
        <Remainder/>
      </div>
    </div>
  );
};

export default Dashboard;
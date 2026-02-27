// import React from "react";
// import Overview from "../Components/Overview";
// import Analytics from "../Components/Analytics";
// import Remainder from "../Components/Remainder";
// import ProjectProgress from "../Components/ProjectProgress";
// import TimeTracker from "../Components/TimeTracker";
// import User from "../Components/User";
// import Products from "../Components/Products";

// const Dashboard = () => {
//   return (
//     <div className="">

//       {/* Overview Row */}
//       <div className="">
//         <Overview />
//       </div>

//       {/* Main Bento Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">


//         {/* LEFT SIDE */}
//         <div className="lg:col-span-2 grid gap-3">

//           {/* Top Row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//             <div className="md:col-span-2 h-fit">
//               <Analytics />
//             </div>
//             <div className="md:col-span-1 h-fit">
//               <Remainder />
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//             <div className="md:col-span-2">
//               <User />
//             </div>
//             <div className="md:col-span-1">
//               <ProjectProgress />
//             </div>
//           </div>

//         </div>


//         {/* RIGHT SIDE */}
//         <div className="flex flex-col gap-3">
//           <Products />
//           <TimeTracker />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Overview from "../Components/Overview";
import Analytics from "../Components/Analytics";
import Remainder from "../Components/Remainder";
import ProjectProgress from "../Components/ProjectProgress";
import TimeTracker from "../Components/TimeTracker";
import User from "../Components/User";
import Products from "../Components/Products";

const Dashboard = () => {
  return (

    <div className="grid grid-cols-8 gap-3">
      <div className="col-span-8 row-span-2"><Overview/></div>
      {/* <div className="col-span-2 row-span-2 col-start-3">6</div>
      <div className="col-span-2 row-span-2 col-start-5">7</div>
      <div className="col-span-2 row-span-2 col-start-7">8</div> */}

      <div className="col-span-4 row-span-2 row-start-3"><Analytics/></div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-3"><Remainder/></div>

      <div className="col-span-2 row-span-4 col-start-7 row-start-3"><Products/></div>
      <div className="col-span-2 row-span-2 col-start-7 row-start-6"><TimeTracker/></div>

      <div className="col-span-3 row-span-3 col-start-1 row-start-5"><User/></div>
      <div className="col-span-3 row-span-3 col-start-4 row-start-5"><ProjectProgress/></div>
    </div>

  );
};

export default Dashboard;


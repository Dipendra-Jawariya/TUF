import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Counter from './components/banner1';
import Content from './components/Content';

function App() {
    return (
        <div>
            <Content/>
            <Dashboard/>
            <Counter/>
        </div>
    );
    
    
    // <div className="banner">
        
    // </div>
  // State for banner settings
//   const [isBannerVisible, setIsBannerVisible] = useState(true);
//   const [bannerDescription, setBannerDescription] = useState("Special Offer! Don't Miss Out!");
//   const [countdown, setCountdown] = useState(10);
//   const [bannerLink, setBannerLink] = useState("https://example.com");
  

//   useEffect(() => {
//     if (countdown > 0 && isBannerVisible) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (countdown === 0) {
//       setIsBannerVisible(false);
//     }
//   }, [countdown, isBannerVisible]);

//   // Reset countdown when the timer is updated
//   const handleTimerChange = (newTimer) => {
//     setCountdown(newTimer);
//     setIsBannerVisible(true);
//   };

//   return (
//     <div className="App">
//       <Dashboard
//         isBannerVisible={isBannerVisible}
//         setIsBannerVisible={setIsBannerVisible}
//         bannerDescription={bannerDescription}
//         setBannerDescription={setBannerDescription}
//         countdown={countdown}
//         setCountdown={handleTimerChange}
//         bannerLink={bannerLink}
//         setBannerLink={setBannerLink}
//       />

//       {isBannerVisible && (
//         <div className="banner">
//           <p>{bannerDescription}</p>
//           <p>Banner will disappear in <span>{countdown}</span> seconds.</p>
//           <a href={bannerLink} target="_blank" rel="noopener noreferrer">Click here to learn more</a>

//         </div>
//       )}
//       <div className="content">
//         <h1>Welcome to Our Website</h1>
//         <p>This is a simple, clean one-page website.</p>
//         {/* Add more content here */}
//       </div>
//     </div>
//   );
}

// function Dashboard({
//   isBannerVisible,
//   setIsBannerVisible,
//   bannerDescription,
//   setBannerDescription,
//   countdown,
//   setCountdown,
//   bannerLink,
//   setBannerLink
// }) {
//   return (
//     <div className="dashboard">
//       <h2>Internal Dashboard</h2>
//       <div className="control">
//         <label>
//           <input
//             type="checkbox"
//             checked={isBannerVisible}
//             onChange={() => setIsBannerVisible(!isBannerVisible)}
//           />
//           Banner On/Off
//         </label>
//       </div>
//       <div className="control">
//         <label>
//           Banner Description:
//           <input
//             type="text"
//             value={bannerDescription}
//             onChange={(e) => setBannerDescription(e.target.value)}
//           />
//         </label>
//       </div>
//       <div className="control">
//         <label>
//           Banner Timer (seconds):
//           <input
//             type="number"
//             value={countdown}
//             onChange={(e) => setCountdown(parseInt(e.target.value, 10))}
//           />
//         </label>
//       </div>
//       <div className="control">
//         <label>
//           Banner Link:
//           <input
//             type="text"
//             value={bannerLink}
//             onChange={(e) => setBannerLink(e.target.value)}
//           />
//         </label>
//       </div>
//       <button>Update Banner</button>
//     </div>
//   );
// }

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import '../../assets/style/App.css';

import HistoryPage from "./history";
import ProfilePage from "./profile";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={ <HistoryPage /> } />
      <Route path="/profile" element={ <ProfilePage /> } />
      {/* <Route path="/:video_id" element={ <DetailPage/> } /> */}
    </Routes>
  </Router>
  );
}

export default App;

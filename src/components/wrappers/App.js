
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import '../../assets/style/App.css';

import HistoryPage from "./history";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={ <HistoryPage /> } />
      {/* <Route path="/:video_id" element={ <DetailPage/> } /> */}
    </Routes>
  </Router>
  );
}

export default App;

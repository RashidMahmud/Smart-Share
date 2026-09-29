import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DropPage from './pages/DropPage';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/drop" element={<DropPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;

import './theme/global.css';
import FilterPage from './pages/FilterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilterPage from '../pages/FilterPage';


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FilterPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

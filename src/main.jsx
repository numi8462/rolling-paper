import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.jsx';
import RollingPaperList from './pages/RollingPaperList/RollingPaperList.jsx';
import RollingPaper from './pages/RollingPaper/RollingPaper.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<RollingPaperList />} />
          <Route path="post">
            <Route path=":id" element={<RollingPaper />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

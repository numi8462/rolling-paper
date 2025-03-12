import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.jsx';
import RollingPaperList from './pages/RollingPaperList/RollingPaperList.page.jsx';
import RollingPaper from './pages/RollingPaper/RollingPaper.page.jsx';
import CreateMessageCard from './pages/CreateMessageCard/CreateMessageCard.page.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<RollingPaperList />} />
          <Route path="post/:id" element={<RollingPaper />} />
          <Route path='post/:id/message' element={<CreateMessageCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

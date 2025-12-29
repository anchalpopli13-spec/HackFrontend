import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Journey from './pages/Journey';
import Tasks from './pages/Tasks';
import Rewards from './pages/Rewards';
import Nova from './pages/Nova';
import PostCompletionFeedback from './pages/PostCompletionFeedback';
import TaskCompletionModal from './components/TaskCompletionModal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/nova" element={<Nova />} />
          <Route path="/feedback" element={<PostCompletionFeedback />} />
        </Routes>
        <TaskCompletionModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </MainLayout>
    </Router>
  );
}

export default App;

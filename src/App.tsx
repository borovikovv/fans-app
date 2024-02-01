import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login/LoginPage';
import UserPage from './pages/user/UserPage';
import PrivateRoute from './components/PrivateRoute';
import ContentLayout from './components/ContentLayout';
import Dashboard from './pages/dashboard/Dashboard';
import { ProvideUser } from './hooks/useUser';

function App() {
  return (
    <BrowserRouter>
      <ProvideUser>
        <ContentLayout>
          <Routes>
            <Route path="/">
              <Route path="login" element={<LoginPage />} />
              <Route path="/" element={<Dashboard />} />
              <Route
                path="user"
                element={
                  <PrivateRoute>
                    <UserPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </ContentLayout>
      </ProvideUser>
    </BrowserRouter>
  );
}

export default App;

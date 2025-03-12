import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
// import Project from './Project.tsx'
// import RecentActivity from './RecentActivity.tsx'
import Dashboard from './screens/dashboard.tsx'
import SignIn from './screens/auth/signIn.tsx'
import { SignUp } from './screens/auth/signup.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/auth/signin" element={<SignIn />} />
    <Route path="/auth/signup" element={<SignUp />} />
  </Routes>
</BrowserRouter>
)

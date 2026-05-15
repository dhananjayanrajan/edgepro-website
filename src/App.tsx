import { Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Landing from './pages/Landing'
import MT5Bots from './pages/MT5Bots'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Overview from './pages/dashboard/Overview'
import Wallet from './pages/dashboard/Wallet'
import Subscriptions from './pages/dashboard/Subscriptions'
import MT5Accounts from './pages/dashboard/MT5Accounts'
import Marketplace from './pages/dashboard/Marketplace'
import ProductDetail from './pages/dashboard/ProductDetail'

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/mt5-bots" element={<MT5Bots />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/wallet" element={<Wallet />} />
        <Route path="/dashboard/subscriptions" element={<Subscriptions />} />
        <Route path="/dashboard/mt5-accounts" element={<MT5Accounts />} />
        <Route path="/dashboard/marketplace" element={<Marketplace />} />
        <Route path="/dashboard/marketplace/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

export default App

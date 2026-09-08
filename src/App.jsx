import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import HardwarePage from './pages/HardwarePage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import ClientsPage from './pages/ClientsPage'
import CareersPage from './pages/CareersPage'
import TeamPage from './pages/TeamPage'
import DownloadsPage from './pages/DownloadsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="healthcare-solutions" element={<SolutionsPage />} />
        <Route path="hardware-products" element={<HardwarePage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="news-events" element={<NewsPage />} />
        <Route path="news-events/:id" element={<NewsDetailPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="our-team" element={<TeamPage />} />
        <Route path="downloads" element={<DownloadsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

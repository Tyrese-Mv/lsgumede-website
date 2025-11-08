import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import AnimatedBackground from './AnimatedBackground'
import FloatingParticles from './FloatingParticles'
import MorphingBlobs from './MorphingBlobs'
import FloatingWhatsApp from './FloatingWhatsApp'

const Layout = () => {
  return (
    <div className="font-body bg-brand-brown text-white relative overflow-x-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <FloatingParticles />
      <MorphingBlobs />
      <FloatingWhatsApp />
      <Header />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

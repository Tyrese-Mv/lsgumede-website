import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import WhatToExpect from '../components/WhatToExpect'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import PageTransition from '../components/PageTransition'

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <Services />
      <WhatToExpect />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </PageTransition>
  )
}

export default Home

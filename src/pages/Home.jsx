import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import PageTransition from '../components/PageTransition'

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Contact />
    </PageTransition>
  )
}

export default Home

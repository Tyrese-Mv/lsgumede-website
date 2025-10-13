import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import PageTransition from '../components/PageTransition'

const About = () => {
  const ref = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const founderRef = useRef(null)

  const isInView = useInView(ref, { once: true })
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  const isFounderInView = useInView(founderRef, { once: true, margin: '-100px' })

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-24 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-16 h-0.5 bg-brand-gold mx-auto"></div>
            </motion.div>
            <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-tight">
              Committed to <br />
              <span className="gradient-text">Legal Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Your trusted legal partner in Durban, providing exceptional legal services with integrity and excellence.
            </p>
          </motion.div>

        {/* Our Story */}
        <motion.div
          ref={storyRef}
          className="mb-32 relative"
        >
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div
              className="md:col-span-2 relative order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/20 rounded-2xl -z-10"
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <img
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop"
                  alt="Law office"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover relative z-10"
                />
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-3 order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="font-heading text-4xl md:text-5xl text-brand-gold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our Story
              </motion.h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  LS Gumede Attorneys was founded with a vision to provide accessible, professional legal services to individuals and businesses throughout Durban and the greater KwaZulu-Natal region.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  With over 15 years of combined experience, our team has successfully handled hundreds of cases across various practice areas, earning the trust and respect of our clients.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We pride ourselves on our client-focused approach, ensuring that every client receives personalized attention and expert legal guidance tailored to their unique situation.
                </p>

                <motion.div
                  className="flex items-center gap-8 pt-6"
                  initial={{ opacity: 0 }}
                  animate={isStoryInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-heading text-brand-gold mb-1">500+</div>
                    <div className="text-sm text-gray-500">Cases Handled</div>
                  </div>
                  <div className="w-px h-12 bg-brand-gold/20"></div>
                  <div className="text-center">
                    <div className="text-4xl font-heading text-brand-gold mb-1">15+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="w-px h-12 bg-brand-gold/20"></div>
                  <div className="text-center">
                    <div className="text-4xl font-heading text-brand-gold mb-1">98%</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          ref={valuesRef}
          className="mb-32"
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-brand-gold mb-4">Our Core Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide our practice and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We uphold the highest ethical standards in all our dealings, ensuring honesty and transparency with every client.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in every case, continuously improving our skills and staying current with legal developments.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Commitment',
                description: 'We are committed to achieving the best possible outcomes for our clients through dedicated and personalized service.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-br from-brand-brown/40 to-brand-brown/20 backdrop-blur-sm p-8 rounded-2xl border border-brand-gold/20 relative overflow-hidden"
                  whileHover={{ y: -8, borderColor: 'rgba(201, 169, 97, 0.4)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/5 rounded-bl-full"></div>

                  <motion.div
                    className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {value.icon}
                  </motion.div>

                  <h3 className="font-heading text-2xl text-brand-gold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-gold to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meet Our Founder */}
        <motion.div
          ref={founderRef}
          className="relative"
        >
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={isFounderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-0.5 bg-brand-gold mb-6"></div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">Leadership</h2>
            <p className="text-gray-400 text-lg max-w-2xl font-light">
              Guided by experience, driven by excellence
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-start"
            initial={{ opacity: 0 }}
            animate={isFounderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isFounderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Subtle frame effect */}
                <div className="absolute inset-0 border border-brand-gold/20 z-10"></div>
                <motion.img
                  src="/LS Gumede Picture 1.jpg"
                  alt="Lindokuhle Gumede"
                  className="w-full h-full object-cover grayscale-[20%]"
                  initial={{ scale: 1.1 }}
                  animate={isFounderInView ? { scale: 1 } : { scale: 1.1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isFounderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <h3 className="font-heading text-3xl md:text-4xl text-brand-gold mb-2">
                  Lindokuhle Gumede
                </h3>
                <p className="text-gray-500 text-base uppercase tracking-wider font-light">
                  Founder & Principal Attorney
                </p>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-brand-gold/40 via-brand-gold/20 to-transparent"></div>

              <div className="space-y-5">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  With extensive experience in civil litigation, conveyancing, and corporate law, Lindokuhle brings a depth of knowledge and strategic insight to every case.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  His approach combines meticulous attention to detail with a profound understanding of both legal precedent and practical business considerations, ensuring clients receive not just legal representation, but comprehensive counsel tailored to their specific needs.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Through years of dedicated practice, he has built a reputation for integrity, professionalism, and unwavering commitment to achieving optimal outcomes for those he represents.
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-gray-500 text-sm uppercase tracking-wider font-light">Areas of Expertise</p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-brand-gold/80 text-sm font-light border-l-2 border-brand-gold/40 pl-3">
                    Civil Litigation
                  </span>
                  <span className="text-brand-gold/80 text-sm font-light border-l-2 border-brand-gold/40 pl-3">
                    Conveyancing
                  </span>
                  <span className="text-brand-gold/80 text-sm font-light border-l-2 border-brand-gold/40 pl-3">
                    Corporate Law
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  )
}

export default About

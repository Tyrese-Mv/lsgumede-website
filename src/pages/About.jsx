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
              A Voice for <br />
              <span className="gradient-text">Justice & Dignity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Founded on the belief that every person deserves to be heard, respected, and represented with unwavering integrity.
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
                  src="/LS_Gumede_photo.jpg"
                  alt="LS Gumede Attorneys Office"
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
                My Story
              </motion.h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  From a young age, I was deeply moved by the struggles of ordinary people who often had no one to speak for them. I witnessed how easily the vulnerable can be silenced by complex legal systems and how a single voice — informed, determined, and compassionate — can change someone's entire life.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Becoming a lawyer was never just a career choice for me; it was a calling to stand for fairness, to give people hope where there seems to be none, and to ensure that justice is not reserved only for those who can afford it.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I founded my own law firm because I wanted to practice law on my own terms — with heart, accessibility, and genuine care for my clients. In large firms, clients often become just case numbers. I wanted to create a space where every client feels heard, respected, and involved in their journey to justice.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'Doing what\'s right, even when no one is watching. I will not take a case built on dishonesty or false claims. My commitment is to truth and justice, not just winning at any cost.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Compassion',
                description: 'Every case involves a human story deserving respect and empathy. You are not just a case number; you are a person with real fears, hopes, and rights.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: 'Excellence',
                description: 'Giving my absolute best to every client, every time. My focus is not just on winning — it\'s on doing right by you and achieving fair outcomes.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Accountability',
                description: 'Standing by my clients and my word. When I take on your case, I fight for you as if it were my own matter.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Justice',
                description: 'Ensuring fairness, dignity, and equality are upheld in all we do. True justice means balance — treating everyone with dignity regardless of background or wealth.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
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
                  src="/LS_Gumede_photo.jpg"
                  alt="Lindokuhle Gumede - Founder & Principal Attorney"
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
                  With extensive experience across RAF claims, medical negligence, unlawful arrest, and civil litigation, Lindokuhle specializes in cases that go to the heart of human dignity. Each area reflects a commitment to people, not just paperwork.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  His typical day begins in court representing clients, followed by afternoons meeting with people who need guidance, reviewing evidence, and preparing documents. Between court appearances and consultations, he's returning calls, negotiating settlements, and mentoring young practitioners.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  "If I wasn't a lawyer, I would still be helping people — probably as a teacher or social worker. I've always had a passion for empowering others, especially those who feel voiceless or overlooked."
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  When not in the courtroom or office, Lindokuhle recharges by watching football and rugby. It's this balance of intensity and humanity that makes him not just an effective lawyer, but a trusted advocate who truly understands the people he serves.
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-gray-500 text-sm uppercase tracking-wider font-light">Areas of Expertise</p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-brand-gold/80 text-sm font-light border-l-2 border-brand-gold/40 pl-3">
                    Road Accident Fund (RAF)
                  </span>
                  <span className="text-brand-gold/80 text-sm font-light border-l-2 border-brand-gold/40 pl-3">
                    Medical Negligence
                  </span>
                  <span className="text-brand-gold/80 text-sm font-light border-l-2 border-brand-gold/40 pl-3">
                    Unlawful Arrest
                  </span>
                  <span className="text-brand-gold/80 text-sm font-light border-l-2 border-brand-gold/40 pl-3">
                    Civil Litigation
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

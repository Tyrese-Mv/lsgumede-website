import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import WhatToExpect from '../components/WhatToExpect'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  // LocalBusiness Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://lsgumedeattorneys.co.za/#organization",
        "name": "LS Gumede Attorneys",
        "alternateName": "Lindokuhle Gumede Attorneys",
        "url": "https://lsgumedeattorneys.co.za",
        "logo": "https://lsgumedeattorneys.co.za/LS_Gumede_only_logo.png",
        "image": "https://lsgumedeattorneys.co.za/LS_Gumede_photo.jpg",
        "description": "Professional legal services in Durban, South Africa. Specializing in Road Accident Fund (RAF) claims, medical negligence, unlawful arrest, civil litigation, employment law, family law, and more.",
        "telephone": "+27790134813",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Durban",
          "addressRegion": "KwaZulu-Natal",
          "addressCountry": "ZA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-29.8587",
          "longitude": "31.0218"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Durban"
          },
          {
            "@type": "State",
            "name": "KwaZulu-Natal"
          }
        ],
        "serviceType": [
          "Road Accident Fund Claims",
          "Medical Negligence",
          "Unlawful Arrest Claims",
          "Civil Litigation",
          "Employment Law",
          "Family Law",
          "Estate Administration",
          "Contract Law",
          "Debt Collection",
          "Criminal Defense"
        ],
        "founder": {
          "@type": "Person",
          "name": "Lindokuhle Gumede",
          "jobTitle": "Attorney",
          "image": "https://lsgumedeattorneys.co.za/LS_Gumede_photo.jpg"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/lsgumedeattorneys",
          "https://www.linkedin.com/company/lsgumedeattorneys"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://lsgumedeattorneys.co.za/#website",
        "url": "https://lsgumedeattorneys.co.za",
        "name": "LS Gumede Attorneys",
        "description": "Professional legal services in Durban",
        "publisher": {
          "@id": "https://lsgumedeattorneys.co.za/#organization"
        },
        "inLanguage": ["en-ZA", "zu-ZA"]
      },
      {
        "@type": "Attorney",
        "name": "Lindokuhle Gumede",
        "memberOf": {
          "@id": "https://lsgumedeattorneys.co.za/#organization"
        },
        "knowsAbout": [
          "Road Accident Fund Claims",
          "Medical Negligence Law",
          "Unlawful Arrest Claims",
          "Civil Litigation",
          "Employment Law",
          "Family Law"
        ]
      }
    ]
  }

  return (
    <PageTransition>
      <SEO
        title="LS Gumede Attorneys - Expert Legal Services in Durban | RAF, Medical Negligence & More"
        description="Leading law firm in Durban specializing in Road Accident Fund claims, medical negligence, unlawful arrest, civil litigation, employment & family law. Free consultation. Call 079 013 4813"
        keywords="Durban attorney, lawyers Durban, RAF claims, road accident fund, medical negligence lawyer, unlawful arrest claims, civil litigation Durban, employment law attorney, family law, LS Gumede Attorneys"
        ogImage="/LS_Gumede_photo.jpg"
        structuredData={structuredData}
      />
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

import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SEO = ({
  title,
  description,
  keywords = '',
  ogImage = '/LS_Gumede_only_logo.png',
  ogType = 'website',
  structuredData = null,
  canonical = null
}) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const baseUrl = 'https://lsgumedeattorneys.co.za'
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
  const canonicalUrl = canonical || `${baseUrl}${currentPath}`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${currentPath}`} />
      <link rel="alternate" hrefLang="zu" href={`${baseUrl}${currentPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${currentPath}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content={currentLang === 'zu' ? 'zu_ZA' : 'en_ZA'} />
      <meta property="og:site_name" content="LS Gumede Attorneys" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />

      {/* Business Contact */}
      <meta name="geo.region" content="ZA-KZN" />
      <meta name="geo.placename" content="Durban" />
      <meta name="geo.position" content="-29.8587;31.0218" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO

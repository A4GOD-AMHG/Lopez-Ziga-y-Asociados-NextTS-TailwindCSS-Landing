import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ScrollToTop } from './components/ScrollToTop';
import Header from './components/Header';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://lopezzigayasociados.com.mx/'),
  title: {
    default: 'López Ziga y Asociados',
    template: '%s | López Ziga y Asociados'
  },
  description: 'Con más de 20 años de experiencia y siete años en nuestro actual Despacho Jurídico, nos especializamos en Derecho Penal, Familiar e Inmobiliario. Nuestro equipo de abogados garantiza transparencia y acceso constante a los expedientes digitales de nuestros clientes empresariales, proporcionando un asesoramiento continuo y personalizado.',
  keywords: ['abogados México', 'derecho familiar', 'derecho penal', 'derecho inmobiliario',],
  authors: [{ name: 'Emyux', url: "https://emyux.com" }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    'max-snippet': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'López Ziga y Asociados',
    title: 'López Ziga y Asociados',
    url: 'https://lopezzigayasociados.com.mx/',
    description:
      'Con más de 20 años de experiencia y siete años en nuestro actual Despacho Jurídico, nos especializamos en Derecho Penal, Familiar e Inmobiliario. Nuestro equipo de abogados garantiza transparencia y acceso constante a los expedientes digitales de nuestros clientes empresariales, proporcionando un asesoramiento continuo y personalizado.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo de López Ziga y Asociados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oscar Edwin Lopez – Socio en López Ziga & Asociados',
    description:
      'Abogado Postulante, Socio en López Ziga & Asociados, habitante de Naucalpan, Edo. Mex.; orgulloso de origen zapoteca, paisano de corazón.',
    images: ['https://x.com/oscaredwinlopez/photo'],
    creator: 'https://emyux.com',
  },
  icons: {
    icon: '/favicon.ico',
  }
}

export const dynamicParams = true
export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`flex flex-col min-h-screen bg-gray-50 overflow-y-scroll scrollbar-hide scroll-smooth`}>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
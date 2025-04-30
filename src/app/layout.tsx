import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ScrollToTop } from './components/ScrollToTop';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://ventas.lopezzigayasociados.com.mx/'),
  title: {
    default: 'Asesoría Legal Gratuita - López Ziga y Asociados',
    template: '%s | Consulta Jurídica Inmediata'
  },
  description: '¿Problemas legales urgentes? Obtén tu primera asesoría GRATIS por WhatsApp con abogados especializados en Derecho Penal, Familiar e Inmobiliario. Soluciones inmediatas en CDMX y todo México. ¡Contáctanos ahora mismo!',
  keywords: [
    'asesoría legal gratis whatsapp',
    'abogados en línea México',
    'consulta jurídica inmediata',
    'derecho penal por WhatsApp',
    'abogados familiares 24/7',
    'ventas.lopezzigayasociados.com.mx'
  ],
  authors: [{ name: 'Emyux', url: "https://emyux.com" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    description: 'Habla AHORA con un abogado especializado por WhatsApp sin costo inicial. Soluciones inmediatas en casos de familia, propiedades y derecho penal. ¡Primera consulta 100% gratuita!',
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
    title: 'Asesoría Legal GRATIS por WhatsApp ⚖️',
    description: '¿Necesitas un abogado urgente? Escríbenos por WhatsApp y recibe orientación jurídica profesional en menos de 15 minutos. ¡Sin costo inicial!',
    images: ['https://x.com/oscaredwinlopez/photo'],
    creator: 'https://emyux.com',
  },
  alternates: {
    canonical: 'https://ventas.lopezzigayasociados.com.mx'
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
    <html lang="es" suppressHydrationWarning>
      <body className={`flex flex-col min-h-screen bg-gray-50 overflow-y-scroll scrollbar-hide scroll-smooth`}>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                
                fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
                fbq('track', 'PageView');
                
                window.fbq = window.fbq || function(...args) {
                  (window.fbq.queue = window.fbq.queue || []).push(args);
                };
            `,
          }}
        />
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
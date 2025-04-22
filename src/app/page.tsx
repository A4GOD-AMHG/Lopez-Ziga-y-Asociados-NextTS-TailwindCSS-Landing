import { ServicesSection, LegalTeamSection, StatsSection, TestimonialsSection } from '@/app/components/Sections'
import HeroContent from '@/app/components/HeroContent'
import Image from 'next/image';

export default async function HomePage() {
    return (
        <main className="relative">
            <section className="relative h-[50vh] mt-12 sm:mt-24 sm:h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    alt='bg'
                    placeholder='blur'
                    src="/images/law-bg.avif"
                    priority
                    blurDataURL='/images/law-bg.avif'
                    fill
                />
                <div className="parallax-overlay" />
                <div className="container mx-auto px-4 relative z-10">
                    <HeroContent />
                </div>

            </section>
            <ServicesSection />
            <section
                className="py-20 bg-gray-50"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-5xl font-bold text-primary mb-4">Sobre Nosotros</h2>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-8">
                            Más de 7 años en el mercado
                        </h3>
                        <div className="text-xl text-gray-800 space-y-6">
                            <p>
                                Fundado en el 18 de diciembre del año 2018, Lopez Ziga & Asociados nació de la visión de crear un despacho legal diferente: más ágil, transparente y enfocado en resultados concretos para personas físicas y morales.
                            </p>
                            <p>
                                Trabajamos a tu lado proteger tus intereses y crear estrategias legales que resuelvan conflictos de manera ágil y justa. Nuestro enfoque está basado en la confianza y la colaboración, brindando soluciones integrales adaptadas a las necesidades específicas de cada organización.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-3xl font-bold text-primary mb-4">Misión</h3>
                                <p className='text-xl'>
                                    Diseñar estrategias legales personalizadas para personas físicas y personas morales, con el objetivo de resolver conflictos de forma rápida y eficiente, garantizando el cumplimiento normativo y la justicia en cada caso.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-3xl font-bold text-primary mb-4">Visión</h3>
                                <p className='text-xl'>
                                    Ser reconocidos como una firma legal confiable en el ámbito en Ciudad de México,  Estado de México y Estado de Morelos, brindando asesoría jurídica con apoyo a los criterios emitidos por la suprema corte de justicia de la nación, y la corte interamericana de derechos humanos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <StatsSection />
            <LegalTeamSection />
            <TestimonialsSection />
        </main>
    )
}
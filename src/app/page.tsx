import { ServicesSection, LegalTeamSection, StatsSection, TestimonialsSection } from '@/app/components/Sections'
// import HeroContent from '@/app/components/HeroContent'
import Image from 'next/image';
import { HeroCarousel } from './components/Carousels';

const slides = [
    {
        title: "Asesorías Legales de Vanguardia",
        description: "Recibe asesoramiento jurídico personalizado y efectivo, con más de 20 años de experiencia en derecho público y privado.",
        ctaText: "Obtén Asesoría Gratis",
        bgImage: "/images/law-bg1.avif",
    },
    {
        title: "Gestión de Sucesiones y Herencias",
        description: "Asesoría especializada en testamentos, sucesiones intestadas y división de bienes familiares.",
        ctaText: "Obtén Asesoría Gratis",
        bgImage: "/images/law-bg2.avif",
    },
    {
        title: "Familias, acuerdos de guardia y convivencia",
        description: "Defensa especializada en convenios de guardia y custodia, patria potestad, así como régimen de visitas.",
        ctaText: "Obtén Asesoría Gratis",
        bgImage: "/images/law-bg3.avif",
    }
]

export default async function HomePage() {
    return (
        <main className="relative">
            <section className="relative h-[55vh] mt-8 sm:mt-16 sm:h-[80vh] flex items-center justify-center overflow-hidden">
                <div id="carousel-viewport" className="overflow-hidden h-full w-full">
                    <div className="flex h-full">
                        {slides.map((slide, idx) => (
                            <div
                                className="relative flex-0 min-w-full w-full h-full"
                                key={idx}
                            >
                                <Image
                                    src={slide.bgImage}
                                    alt={slide.title}
                                    fill
                                    placeholder={idx === 0 ? 'blur' : 'empty'}
                                    blurDataURL={idx === 0 ? slide.bgImage : undefined}
                                    priority={idx === 0}
                                    className="object-bottom"
                                />
                                <div className="absolute inset-0 bg-black/60" />
                                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 text-white">
                                    <h1 className="text-3xl md:text-6xl font-bold drop-shadow-xl">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl my-8 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                        {slide.description}
                                    </p>
                                    <button className="cta-button bg-[#70ac60] cursor-pointer hover:bg-[#90c67b] motion-scale-loop-[0.95] motion-duration-[1500ms] motion-ease-in-out text-white font-bold py-4 px-12 text-xl rounded-lg shadow-lg">
                                        {slide.ctaText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <HeroCarousel
                    containerId='carousel-viewport'
                />

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
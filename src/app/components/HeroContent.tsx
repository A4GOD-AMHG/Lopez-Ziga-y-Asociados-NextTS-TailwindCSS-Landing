'use client'

import { FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import FreeConsultationModal from './Consultations/FreeConsultationModal';

export default function HeroContent() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Asesorías <br className="hidden md:block" />
                    <span className="text-primary">Legales</span> de Vanguardia
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                    Recibe asesoramiento jurídico personalizado y efectivo, con más de 20 años de experiencia en derecho público y privado.
                </p>

                <button
                    title='Obtener Asesoría Gratis'
                    className="bg-primary cursor-pointer motion-scale-loop-[0.95] motion-duration-[1500ms] motion-ease-in-out text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto hover:bg-secondary transition-all"
                    onClick={() => setIsModalOpen(true)}
                >
                    Obtén Asesoría Gratis
                    <FiArrowRight className="text-xl" />
                </button>
            </div>

            <FreeConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
'use client';

import { useEffect, useState } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';
import FreeConsultationModal from '../Consultations/FreeConsultationModal';

interface HeroCarrouselProps {
    containerId: string;
}

export default function HeroCarousel({ containerId }: HeroCarrouselProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

    useEffect(() => {
        let embla: EmblaCarouselType | null = null;

        (async () => {
            const viewport = document.getElementById(containerId);
            if (!viewport) return;

            const EmblaCarousel = (await import('embla-carousel')).default;
            const Autoplay = (await import('embla-carousel-autoplay')).default;

            embla = EmblaCarousel(
                viewport,
                { loop: true, skipSnaps: false, containScroll: 'trimSnaps' },
                [Autoplay({ delay: 8000, stopOnInteraction: false, playOnInit: true })]
            );

            setEmblaApi(embla);

            const snaps = embla.scrollSnapList();
            setSlideCount(snaps.length);
            setSelectedIndex(embla.selectedScrollSnap());

            embla.on('select', () => {
                if (embla) setSelectedIndex(embla.selectedScrollSnap());
            });

        })().catch(console.error);

        return () => {
            if (embla) embla.destroy();
        };
    }, [containerId]);

    useEffect(() => {
        const openModal = () => setIsModalOpen(true);
        document.querySelectorAll('.cta-button').forEach(btn =>
            btn.addEventListener('click', openModal)
        );
        return () =>
            document.querySelectorAll('.cta-button').forEach(btn =>
                btn.removeEventListener('click', openModal)
            );
    }, []);

    return (
        <div className='absolute inset-x-0 bottom-5 mx-auto'>
            <div className="flex justify-center z-50 gap-2">
                {Array.from({ length: slideCount }).map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 sm:w-5 sm:h-5 rounded-full cursor-pointer ${selectedIndex === idx ? 'bg-[#70ac60]' : 'bg-white'
                            }`}
                        onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                        title={`Go to slide ${idx + 1}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            <FreeConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
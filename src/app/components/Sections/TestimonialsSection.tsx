import Image from 'next/image';
import dynamic from 'next/dynamic';
import { testimonials } from '@/lib/testimonials';

const TestimonialsCarousel = dynamic(
    () => import('@/app/components/Carousels/TestimonialsCarousel'),
)

export default function TestimonialsSection() {
    return (
        <section className="bg-white py-16">
            <div className="container relative mx-auto px-4 h-140 sm:h-100">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#70ac60]">
                    Testimonios de Clientes
                </h2>

                <div id="testimonials-viewport" className="overflow-hidden">
                    <div className="flex">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="relative flex-0 min-w-full w-full h-140 sm:h-100"
                            >
                                <div className="max-w-3xl mx-auto p-6">
                                    <div className="bg-white rounded-xl shadow-lg p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 flex-shrink-0 aspect-square rounded-full overflow-hidden border-2 border-[#90c67b]">
                                                <Image
                                                    src={testimonial.photo}
                                                    alt={testimonial.name}
                                                    width={80}
                                                    height={80}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="ml-4 flex-1 min-w-0">
                                                <h3 className="text-xl font-bold truncate">{testimonial.name}</h3>
                                                <p className="text-[#757575] truncate">{testimonial.location}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-4">&quot;{testimonial.text}&quot;</p>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-6 h-6 ${i < testimonial.rating ? 'text-primary' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <TestimonialsCarousel containerId="testimonials-viewport" />
            </div>
        </section>
    )
}
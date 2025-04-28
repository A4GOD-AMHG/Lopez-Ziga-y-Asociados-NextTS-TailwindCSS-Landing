import Link from 'next/link';
import { FiBriefcase, FiHome, FiUsers } from 'react-icons/fi';

const services = [
    {
        title: 'Derecho Penal',
        icon: <FiBriefcase className="text-7xl text-primary mb-6" />,
        description: 'Defensa legal especializada en delitos económicos y financieros',
        href: 'https://lopezzigayasociados.com.mx/derecho-penal'
    },
    {
        title: 'Derecho Inmobiliario',
        icon: <FiHome className="text-7xl text-primary mb-6" />,
        description: 'Asesoría en transacciones y litigios de bienes raíces',
        href: 'https://lopezzigayasociados.com.mx/derecho-inmobiliario'
    },
    {
        title: 'Derecho Familiar',
        icon: <FiUsers className="text-7xl text-primary mb-6" />,
        description: 'Gestión de conflictos familiares y auditorías legales',
        href: 'https://lopezzigayasociados.com.mx/derecho-familiar'
    }
]

export default async function ServicesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2
                    className="text-4xl md:text-5xl font-bold text-center text-primary mb-16"
                >
                    Servicios Jurídicos Especializados
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link href={service.href}
                            key={service.title}

                            className="bg-white cursor-pointer p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <div className="text-center">
                                <div className="inline-block">{service.icon}</div>
                                <h3 className="text-3xl md:text-3xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-xl">{service.description}</p>
                                <span className="text-gray-900 text-lg font-semibold cursor-pointer flex items-center justify-center gap-2 mx-auto">
                                    Click para ver más
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
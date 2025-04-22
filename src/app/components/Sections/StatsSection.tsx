'use client'

import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

const stats = [
    { id: 1, title: 'Juicios Ganados', value: 251, icon: <FiBriefcase />, suffix: '' },
    { id: 2, title: 'Tasa de Éxito Legal', value: 83, icon: <FiAward />, suffix: '%' },
    { id: 3, title: 'Clientes Complacidos', value: 520, icon: <FiUsers />, suffix: '' },
    { id: 4, title: 'Casos Resueltos', value: 569, icon: <FiCheckCircle />, suffix: '' }
]

const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const increment = target / 30
            let current = 0

            const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                    clearInterval(timer)
                    setCount(target)
                } else {
                    setCount(Math.ceil(current))
                }
            }, 20)

            return () => clearInterval(timer)
        }
    }, [isInView, target])

    return (
        <span ref={ref} className="text-5xl font-bold">
            {count}{suffix}
        </span>
    )
}

export default function StatsSection() {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-5xl mb-4 flex justify-center">
                                {stat.icon}
                            </div>
                            <Counter target={stat.value} suffix={stat.suffix} />
                            <h3 className="text-xl font-medium mt-2">{stat.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
'use client'

import { FiX, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface FreeConsultationModalProps {
    isOpen: boolean;
    service?: string;
    onClose: () => void;
}

export default function FreeConsultationModal({ isOpen, service, onClose }: FreeConsultationModalProps) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        servicio: service || 'Derecho Penal',
        problema: '',
        enTramite: 'no',
        presupuesto: 'si',
        urgencia: 'media'
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.nombre || !formData.email || !formData.problema) {
            alert('Por favor complete todos los campos requeridos')
            return
        }

        const message = `Nueva solicitud de asesoría gratuita:%0A%0A
Nombre: ${formData.nombre}%0A
Email: ${formData.email}%0A
Servicio: ${formData.servicio}%0A
Problema: ${formData.problema}%0A
¿Ya está en trámite?: ${formData.enTramite}%0A
¿Cuenta con presupuesto?: ${formData.presupuesto}%0A
Urgencia: ${formData.urgencia}`

        window.open(`https://wa.me/+525514083982?text=${message}`, '_blank')
        onClose()
    }

    if (!isOpen) return null

    return createPortal(
        <div onClick={onClose} className="fixed inset-0 bg-black/50 z-[1000] flex overflow-auto items-start sm:items-center justify-center p-4">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl w-full max-w-full md:max-w-2xl mx-4 relative overflow-y-scroll scrollbar-hide scroll-smooth max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-primary"
                    title="Cerrar"
                >
                    <FiX className="text-2xl" />
                </button>

                <div className="p-8">
                    <h2 className="text-3xl font-bold text-primary mb-6">Asesoría Legal</h2>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 gap-4 md:gap-6">
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-2">Nombre completo *</label>
                                <input
                                    type="text"
                                    required
                                    title="Nombre completo"
                                    placeholder="Ej: Juan Pérez"
                                    className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary text-sm md:text-base"
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                />
                            </div>

                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-2">Correo electrónico *</label>
                                <input
                                    type="email"
                                    required
                                    title="Correo electrónico"
                                    placeholder="Ingrese su correo electrónico"
                                    className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary text-sm md:text-base"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">¿Caso en trámite?</label>
                                    <select
                                        title="¿El caso ya está en trámite?"
                                        className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary text-sm md:text-base"
                                        value={formData.enTramite}
                                        onChange={(e) => setFormData({ ...formData, enTramite: e.target.value })}
                                    >
                                        <option value="si">Sí</option>
                                        <option value="no">No</option>
                                        <option value="no-se">No sé</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Urgencia</label>
                                    <select
                                        title="Nivel de urgencia"
                                        className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary text-sm md:text-base"
                                        value={formData.urgencia}
                                        onChange={(e) => setFormData({ ...formData, urgencia: e.target.value })}
                                    >
                                        <option value="baja">Baja</option>
                                        <option value="media">Media</option>
                                        <option value="alta">Alta</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                                <div className='col-span-1'>
                                    <label className="block text-gray-700 mb-2">¿Tiene presupuesto?</label>
                                    <select
                                        title="¿Presupuesto disponible?"
                                        className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary text-sm md:text-base"
                                        value={formData.presupuesto}
                                        onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                                    >
                                        <option value="si">Si</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>


                                <div className='col-span-1'>
                                    <label className="block text-gray-700 mb-2">Tipo de Servicio *</label>
                                    <select
                                        required
                                        title="Seleccione el tipo de servicio"
                                        className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary text-sm md:text-base"
                                        value={formData.servicio}
                                        onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                                    >
                                        <option value="Derecho Penal">Derecho Penal</option>
                                        <option value="Derecho Inmobiliario">Derecho Inmobiliario</option>
                                        <option value="Derecho Familiar">Derecho Familiar</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <label className="block text-gray-700 mb-2">Describa su problema legal *</label>
                            <textarea
                                required
                                title="Describa su problema legal"
                                placeholder="Ingrese una descripción de su problema legal"
                                className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-primary"
                                value={formData.problema}
                                onChange={(e) => setFormData({ ...formData, problema: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 md:py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            Enviar Solicitud
                            <FiSend className="text-lg md:text-xl" />
                        </button>
                    </form>
                </div>
            </div>
        </div>, document.body
    )
}
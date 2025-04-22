'use client'

import { FiX, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface FreeConsultationModalProps {
    isOpen: boolean;
    service?: string;
    onClose: () => void;
}

const SERVICE_OPTIONS = [
    'Derecho Penal',
    'Derecho Inmobiliario',
    'Derecho Familiar',
];

const CASE_STATUS_OPTIONS = [
    'No iniciado',
    'En trámite',
    'Concluido',
];

const BUDGET_OPTIONS = [
    'Menos de $1,000',
    '$1,000 - $5,000',
    'Más de $5,000',
];

const URGENCY_OPTIONS = [
    'Baja',
    'Media',
    'Alta',
];

export default function FreeConsultationModal({
    isOpen,
    service,
    onClose,
}: FreeConsultationModalProps) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        servicio: service || SERVICE_OPTIONS[0],
        estadoCaso: CASE_STATUS_OPTIONS[0],
        presupuesto: BUDGET_OPTIONS[0],
        urgencia: URGENCY_OPTIONS[1],
        descripcion: '',
    });

    const maxChars = 200;
    const charsLeft = maxChars - formData.descripcion.length;

    const handleChange = (
        field: keyof typeof formData,
        value: string
    ) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email) {
            alert('Por favor, complete los campos Nombre y Email.');
            return;
        }

        const message = `Hola, soy ${formData.nombre} de correo ${formData.email}.

Necesito asesoría en el servicio de ${formData.servicio}.
Tengo una urgencia ${formData.urgencia}.
Presupuesto: ${formData.presupuesto}.

Descripción de mi caso:
${formData.descripcion}`;

        const url = `https://wa.me/525514083982?text=${encodeURIComponent(
            message
        )}`;

        window.open(url, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-start sm:items-center justify-center p-4"
        >
            <div
                onClick={e => e.stopPropagation()}
                className="bg-white rounded-xl w-full max-w-lg p-6 relative overflow-y-auto max-h-[90vh]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-primary"
                    title="Cerrar"
                >
                    <FiX size={24} />
                </button>

                <h2 className="text-2xl font-bold text-primary mb-4">
                    Agenda tu consulta gratuita
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Nombre completo *</label>
                        <input
                            type="text"
                            required
                            placeholder="Ej: Juan Pérez"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
                            value={formData.nombre}
                            onChange={e => handleChange('nombre', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Correo electrónico *</label>
                        <input
                            type="email"
                            required
                            placeholder="ejemplo@correo.com"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
                            value={formData.email}
                            onChange={e => handleChange('email', e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Servicio *</label>
                            <select
                                required
                                title="Seleccione un servicio"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
                                value={formData.servicio}
                                onChange={e => handleChange('servicio', e.target.value)}
                            >
                                {SERVICE_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Estado del caso</label>
                            <select
                                title="Seleccione el estado del caso"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
                                value={formData.estadoCaso}
                                onChange={e => handleChange('estadoCaso', e.target.value)}
                            >
                                {CASE_STATUS_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Presupuesto</label>
                            <select
                                title="Seleccione un presupuesto"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
                                value={formData.presupuesto}
                                onChange={e => handleChange('presupuesto', e.target.value)}
                            >
                                {BUDGET_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Urgencia</label>
                            <select
                                title="Seleccione el nivel de urgencia"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
                                value={formData.urgencia}
                                onChange={e => handleChange('urgencia', e.target.value)}
                            >
                                {URGENCY_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">
                            Describe tu caso ({charsLeft} caracteres restantes)
                        </label>
                        <textarea
                            required
                            maxLength={maxChars}
                            placeholder="Breve descripción (máx. 200 caracteres)"
                            className="w-full p-2 border rounded-lg resize-none h-24 focus:ring-2 focus:ring-primary"
                            value={formData.descripcion}
                            onChange={e => handleChange('descripcion', e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                        Enviar solicitud
                        <FiSend size={20} />
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
}
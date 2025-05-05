"use client"

import { addToNewsletter } from "@/app/actions";
import { useState } from "react";
import { FiCheckCircle, FiSend, FiX, FiXCircle } from "react-icons/fi";

export default function NewsLetter() {
    const [email, setEmail] = useState<string>("");
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [modal, setModal] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
        show: false,
        type: 'success',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setIsSubmitting(true)

        const result = await addToNewsletter(email)

        if (result.success) {
            setEmail("")
            setModal({
                show: true,
                type: 'success',
                message: '¡Gracias por suscribirte!'
            })
        } else {
            setModal({
                show: true,
                type: 'error',
                message: 'Error al suscribirse. Por favor intenta nuevamente.'
            })
        }

        setIsSubmitting(false)
    }

    const closeModal = () => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.classList.add('closing');
            setTimeout(() => {
                setModal(prev => ({ ...prev, show: false }));
            }, 300);
        }
    };

    return <>
        <div className="mb-10 text-center">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-primary">
                    Suscríbete a nuestro boletín legal
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-row portrait:flex-col items-center gap-4">
                    <input
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value))
                        }}
                        className={`flex-grow relative px-6 w-full placeholder:text-gray-600 md:w-auto py-3 rounded-lg border bg-white focus:outline-none 
                                    ${!isValidEmail && email.length > 0 ? "border-red-500 focus:ring-red-500" : "focus:ring-secondary"
                            }`}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting || !isValidEmail}
                        className="bg-primary cursor-pointer w-52 hover:bg-secondary text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium disabled:opacity-70"
                    >
                        <FiSend className="text-xl" />
                        {isSubmitting ? "Enviando..." : "Suscribirse ahora"}
                    </button>
                </form>
                {!isValidEmail && email.length > 0 && (
                    <p className="text-red-500 absolute text-sm mt-2">Por favor ingresa un correo electrónico válido</p>
                )}
            </div>
        </div >
        {
            modal.show && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300">
                    <div className={`bg-white rounded-lg p-8 max-w-sm w-full relative transform transition-all duration-300 scale-95 modal-content
                            ${modal.show ? 'animate-fade-in' : 'opacity-0 scale-90'}`}>
                        <div
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FiX className="text-xl w-6 h-6" />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            {modal.type === 'success' ? (
                                <FiCheckCircle className="text-4xl text-primary mb-4" />
                            ) : (
                                <FiXCircle className="text-4xl text-red-500 mb-4" />
                            )}
                            <p className="text-lg font-medium mb-4">{modal.message}</p>
                            <button
                                onClick={closeModal}
                                className={`px-6 py-2 cursor-pointer rounded-lg ${modal.type === 'success'
                                    ? 'bg-primary hover:bg-secondary'
                                    : 'bg-red-500 hover:bg-red-600'
                                    } text-white transition-colors`}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    </>
}
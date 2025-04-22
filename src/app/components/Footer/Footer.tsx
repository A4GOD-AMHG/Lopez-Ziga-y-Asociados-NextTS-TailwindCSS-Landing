import { FiSend, FiPhoneCall } from "react-icons/fi";
import Logo from "../Logo";
import NewsLetter from "./NewsLetter";

export default async function Footer() {

    return (
        <footer className="bg-gray-100 text-gray">
            <div className="container mx-auto px-4 pt-12 pb-6">

                <NewsLetter />
                <div className="grid grid-cols-2 portrait:grid-cols-1 gap-5 lg:gap-8">
                    <div className="flex flex-col items-center portrait:items-center">
                        <div className="mb-4 h-auto">
                            <div className="w-40 md:w-48 lg:w-52 object-contain cursor-pointer">
                                <Logo />
                            </div>
                        </div>
                        <p className="text-gray-700 text-center portrait:text-center text-lg italic pr-12 portrait:px-4">
                            &quot;Justicia y Excelencia Legal, defendiendo sus intereses con los mejores argumentos&quot;
                        </p>
                    </div>


                    <div className="text-center portrait:text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-primary">
                            Contacto
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-medium text-lg text-gray-600">CDMX</h4>
                                <p>Valle de Zumpango 15<br className="hidden portrait:block" />53050 Naucalpan de Juárez, Méx.</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-lg text-gray-600">Cocoyoc</h4>
                                <p>Cocoyoc - Oaxtepec 26<br className="hidden portrait:block" />62736 El Partidor, Mor.</p>
                            </div>
                            <div className="pt-2">
                                <p className="flex items-center justify-center gap-2">
                                    <FiSend className="text-primary" />
                                    <a
                                        href="mailto:contacto@lopezzigayasociados.com.mx"
                                        className="text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        contacto@lopezzigayasociados.com.mx
                                    </a>
                                </p>
                                <p className="flex items-center justify-center gap-2 mt-2">
                                    <FiPhoneCall className="text-primary" />
                                    <a
                                        href="tel:+525514083982"
                                        className="text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        +52 5514083982
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-light mt-8 pt-6 text-center">
                    <p className="text-gray-800">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer >
    )
}
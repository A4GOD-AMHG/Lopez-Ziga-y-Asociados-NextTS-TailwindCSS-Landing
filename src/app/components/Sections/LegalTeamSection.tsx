import { teamMembers } from '@/lib/team_members'
import Image from 'next/image'

export default async function LegalTeamSection() {
    const getGridClass = () => {
        if (teamMembers.length === 1) return 'grid-cols-1 max-w-6xl mx-auto'
        if (teamMembers.length === 2) return 'grid-cols-1 md:grid-cols-2'
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    }

    return (
        <section className="py-16 bg-gradient-to-b from-[#f8f8f8] to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-[#70ac60] mb-12 relative">
                    Nuestro equipo legal
                </h2>

                <div className={`grid ${getGridClass()} gap-8 xl:gap-12`}>
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className={`group bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden border border-gray-100
                            ${teamMembers.length === 1 ? 'md:flex md:h-[500px]' : ''}`}
                        >
                            <div className={`relative ${teamMembers.length === 1 ? 'md:w-1/2 md:h-full h-96' : 'h-96'}`}>
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className={`${teamMembers.length === 1 ? 'md:object-cover' : 'object-cover'} transition-transform duration-300`}
                                    quality={100}
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                            </div>

                            <div className={`p-6 ${teamMembers.length === 1 ? 'md:w-1/2 md:p-8' : ''}`}>
                                <div className="mb-4 md:mb-5">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#2c3e50] mb-2">{member.name}</h3>
                                    <p className="text-[#70ac60] font-semibold text-lg mb-3">{member.role}</p>
                                    {member.description && (
                                        <p className="text-gray-700 text-sm md:text-base mb-4">{member.description}</p>
                                    )}
                                </div>

                                <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6 text-[#70ac60] mr-3 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-gray-700 font-medium">{member.experience} de experiencia</span>
                                    </div>

                                    {member.cases && (
                                        <div className="flex items-center">
                                            <svg
                                                className="w-5 h-5 md:w-6 md:h-6 text-[#70ac60] mr-3 flex-shrink-0"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span className="text-gray-600">{member.cases} casos resueltos</span>
                                        </div>
                                    )}

                                    <div className="flex items-center">
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6 text-[#70ac60] mr-3 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="text-gray-600 hover:text-[#70ac60] transition-colors"
                                        >
                                            {member.email}
                                        </a>
                                    </div>

                                    {member.areas && (
                                        <div className="pt-4 mt-4 border-t border-gray-100">
                                            <h4 className="text-lg md:text-xl font-semibold text-[#70ac60] mb-2">
                                                Áreas de Trabajo:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {member.areas.map((area, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-[#70ac60]/10 text-[#70ac60] text-sm md:text-base rounded-full font-medium"
                                                    >
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
import Link from "next/link";
import React from "react";

interface Props {
    icon: React.ReactNode
    title: string
    description: string
    href?: string
}

export default function ServiceCard({ icon, title, description, href }: Props) {
    const CardContent = (
        <div className={`group bg-white p-10 rounded-2xl border-l-0 border-[#006A66] hover:border-l-8 transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[320px] ${!href ? 'cursor-default' : ''}`}>
            <div>
                <span className="text-5xl mb-6 block">{icon}</span>

                <h3 className="text-2xl font-bold text-[#041534] mb-4">
                    {title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className={`mt-8 flex items-center text-[#006A66] font-bold gap-2 ${href ? 'cursor-pointer' : ''}`}>
                اقرأ المزيد
            </div>
        </div>
    );

    return href ? (
        <Link href={href}>
            {CardContent}
        </Link>
    ) : (
        CardContent
    );
}
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { GatewayHeader } from './GatewayHeader'
import { GatewayCard } from './GatewayCard'
import { GatewayFooter } from './GatewayFooter'

export const GatewayPage = () => {
    const cards = [
        {
            titleEn: "Amaken Appraisal",
            titleAr: "أماكن للتقييم",
            description: "Specialized real estate valuation services providing accurate, data-driven insights for commercial and residential sectors across the Kingdom.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYhQxMQZ7Tj_fyhx2eMBGYuE1w98fjotJ3qA6fc-gdEASXfD4BVBNUGL5X-4KZe9vKHsf8AigyEflW5hU9GyvJS3-KSPFA_KPMQhMfTTJP2N8rVGflJ_GMyPIX3LQGyfrwA6Z-G17uukaJGDn72wZId9GtCOOFT4K9syFfxpb_czow8TuZHQmyPiJcgE6DPaVNN5dV97UzxVNdhitO-pTaeoAPeGRNSrBfPfbA0orc2mlcNqoqPhn3clprQucM7Bsk1fVqqsvnYaDY",
            icon: "domain",
            href: "/appraisal",
            accentColor: "#006a66" // Blue
        },
        {
            titleEn: "International Group",
            titleAr: "مجموعة أماكن الدولية",
            description: "The flagship global investment and development arm, bridging Saudi excellence with international standard architectural and real estate ventures.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArvkOZRyUvB19fwCdNTEz1JBIcLSBJGhirzEMbHQsiS4i8XQeBbxIevMIwEBsJgIdy3o01ORhe0BtibncaAnq9QkJCLJdWDjO5S78BG9L9J8eXMK-H-HcQAB-IDWDPe_ymd-fLrVHp8CbDvaWOGyJojkm25OAO0rAgaVj5U4RfT_QFb1u8MD3U97Ckg9YgRJ76et4MdLTVLaqK6lyHGYsx08DzMyYGMz7bIUQsWIpClWEWSrXzIicA6isTA7Cn_XAl3hDlKDuHNiVD",
            icon: "public",
            href: "/group",
            isFeatured: true,
            accentColor: "rgb(162, 139, 103)" // Gold
        },
        {
            titleEn: "Amaken Consulting",
            titleAr: "أماكن للاستشارات",
            description: "Strategic advisory and feasibility studies designed to navigate the complexities of the Saudi property market under the Vision 2030 framework.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDciJZNti6FcO3JiLUKbL7oVBm-yfg_K-OzGo51-1bBBI7J1CzJofb-gX4xVu9EAwGEotxvvw9Llb0oyRlG2u3Llvl6npkVhnBzwyXDcsRgmyisv18HezYGLO4Qp-7cprSrh_XePgw5_53W96nxeJjxxT-n9Dn9dTCCPOV3okbejjbd3CVDZjICaFSEHH9dWtREvR-kmPLXfOBOLq4QKWLxBmG5H9Wsh1l-WlyJhpWa-188xMKL_J5_5X_KDD6DZPCvReUL9KAZe0Wi",
            icon: "insights",
            href: "/consultation",
            accentColor: "rgb(239, 212, 71)" // Green
        }
    ]

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-12 bg-[#f9f9f9] overflow-hidden">
            {/* Background Gradient & Texture */}
            <div className="absolute inset-0 radial-gradient(circle at top right, #ffffff 0%, #f3f3f3 100%)"></div>
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANRUex9bwyq618H3l02B6Q6x_sTZ_HgTluf7g1z1RZBGseIyYZX9bAA6UrAUiphDDq0GqjqdqW7hyKvtCMlkzM3nd3jriG5BqXclPHdXQQzkCA1vsXqcTIF1DpZJfL0mjL9OcPm2CDeApkbTmzzWcFTNyfzSw2mPyrNIe72i0jxqBBbkqkMNcFi2EPX67ykTK9qQaPmNgYT6nNq6wIRXeoLpGH01h_Umf2bGXVZ9JkMUOPX_qhWd4U4J8SuIMwwGli6HbLupHFXKaB"
                    alt="Background texture"
                />
            </div>

            <GatewayHeader />

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {cards.map((card, index) => (
                    <GatewayCard key={index} {...card} />
                ))}
            </div>

            <GatewayFooter />
        </main>
    )
}

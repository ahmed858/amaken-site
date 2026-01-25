"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppContact() {
    const phoneNumber = "920003401"
    const message = "مرحباً اريد الاستعلام عن خدماتكم."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            // className="block transition-all duration-300 hover:scale-110 group"
            aria-label="تواصل معنا عبر واتساب"

            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
        fixed bottom-6 left-6 z-50
        w-16 h-16
        bg-[#25D366]
        rounded-full
        flex items-center justify-center
        shadow-[0_8px_30px_rgba(37,211,102,0.6)]
        hover:shadow-[0_12px_40px_rgba(37,211,102,0.8)]
        transition-all
      "
        >
            {/* WhatsApp Official Icon */}
            <svg
                viewBox="0 0 175.216 175.552"
                className="w-16 h-16 drop-shadow-lg"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#25D366', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#128C7E', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* Background Circle */}
                <circle
                    cx="87.608"
                    cy="87.776"
                    r="87.608"
                    fill="url(#grad1)"
                />

                {/* WhatsApp Icon Path */}
                <path
                    fill="#FFFFFF"
                    d="M87.184,25.227c-33.733,0-61.166,27.423-61.178,61.13c0,10.836,2.851,21.467,8.264,30.73l-8.794,32.15 l33.05-8.667c8.94,4.876,18.97,7.447,29.255,7.447h0.024c33.733,0,61.166-27.423,61.178-61.13 C149.983,52.657,120.916,25.227,87.184,25.227z M87.184,139.102h-0.023c-9.177,0-18.172-2.477-26.015-7.123l-1.863-1.106 l-19.352,5.075l5.163-18.867l-1.213-1.932c-5.086-8.098-7.775-17.471-7.775-27.073c0-28.034,22.829-50.825,50.874-50.825 c13.588,0,26.355,5.298,35.961,14.926c9.604,9.628,14.902,22.418,14.902,36.019C138.043,116.273,115.214,139.102,87.184,139.102z M115.117,99.892c-1.528-0.764-9.049-4.465-10.455-4.976c-1.407-0.51-2.429-0.764-3.451,0.764 c-1.023,1.528-3.96,4.976-4.858,6.004c-0.897,1.023-1.793,1.151-3.321,0.387c-1.528-0.764-6.442-2.373-12.27-7.568 c-4.537-4.047-7.602-9.047-8.499-10.576c-0.898-1.528-0.096-2.355,0.67-3.118c0.686-0.686,1.528-1.793,2.292-2.689 c0.764-0.897,1.023-1.528,1.534-2.55c0.511-1.023,0.256-1.92-0.128-2.684c-0.383-0.764-3.451-8.316-4.73-11.391 c-1.246-2.995-2.511-2.589-3.451-2.636c-0.897-0.043-1.92-0.052-2.942-0.052c-1.023,0-2.682,0.383-4.088,1.92 c-1.407,1.528-5.372,5.25-5.372,12.802c0,7.552,5.5,14.85,6.264,15.873c0.764,1.023,10.836,16.542,26.236,23.205 c3.668,1.59,6.53,2.541,8.76,3.253c3.684,1.17,7.036,1.006,9.684,0.61c2.954-0.441,9.049-3.701,10.329-7.275 c1.279-3.573,1.279-6.648,0.897-7.275C117.802,101.165,116.645,100.656,115.117,99.892z"
                />
            </svg>

            {/* Pulse animation */}
            {/* <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span> */}


            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
                <div className="bg-gray-800 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
                    تواصل معنا
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
            </div>
        </motion.a>
    )
}

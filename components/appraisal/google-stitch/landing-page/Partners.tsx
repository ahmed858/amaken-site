export default function Partners() {
    const partners = [
        "BANK ALRAJHI",
        "SAUDI ARAMCO",
        "NEOM",
        "SABB BANK",
        "ROSHN"
    ]

    return (
        <section className="py-16 bg-white">

            <div className="container mx-auto px-6 flex flex-wrap justify-center gap-16">

                {partners.map((p, i) => (
                    <span
                        key={i}
                        className="text-2xl font-black text-[#041534] opacity-40 hover:opacity-100 transition"
                    >
                        {p}
                    </span>
                ))}

            </div>

        </section>
    )
}
import { PricingPlan } from '../services/serviceData'

export const PricingPlans = ({ title, subtitle, plans }: { title: string, subtitle: string, plans: PricingPlan[] }) => (
    <section className="bg-[#ffffff] py-24" dir="rtl">
        <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold text-[#041534] mb-4">{title}</h2>
            <p className="text-[#45464e] mb-16 max-w-xl mx-auto">{subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`p-8 rounded-xl flex flex-col transition-all ${plan.featured
                                ? 'bg-[#041534] text-white scale-105 shadow-2xl relative'
                                : 'border border-[#c5c6cf] hover:border-[#006a66] text-[#191c1e]'
                            }`}
                    >
                        {plan.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#006a66] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                الأكثر طلباً
                            </div>
                        )}
                        <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-[#041534]'}`}>{plan.name}</h3>
                        <p className={`text-sm mb-6 ${plan.featured ? 'text-[#8392b7]' : 'text-[#45464e]'}`}>{plan.description}</p>
                        <div className={`text-4xl font-black mb-8 ${plan.featured ? 'text-white' : 'text-[#041534]'}`}>
                            {plan.price} {plan.price !== "تواصل معنا" && <span className={`text-sm font-normal ${plan.featured ? 'text-[#8392b7]' : 'text-[#45464e]'}`}>ر.س</span>}
                        </div>
                        <ul className="space-y-4 mb-10 flex-1">
                            {plan.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2 text-sm">
                                    <span className={`material-symbols-outlined text-sm align-middle ${plan.featured ? 'text-[#86f5ee]' : 'text-[#006a66]'}`}>done</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`w-full py-3 font-bold rounded-lg transition-all ${plan.featured
                                    ? 'bg-[#006a66] text-white hover:opacity-90 shadow-lg'
                                    : 'border-2 border-[#041534] text-[#041534] hover:bg-[#041534] hover:text-white'
                                }`}
                        >
                            {plan.price === "تواصل معنا" ? "طلب عرض سعر" : "اختر الباقة"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

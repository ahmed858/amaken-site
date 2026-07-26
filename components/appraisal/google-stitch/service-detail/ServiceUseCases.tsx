import { UseCase } from '../services/serviceData'

export const ServiceUseCases = ({ useCases }: { useCases: UseCase[] }) => (
    <section className="bg-[#f2f4f6] py-24" dir="rtl">
        <div className="max-w-7xl mx-auto px-8 text-right">
            <h2 className="text-3xl font-bold text-[#041534] mb-12">حالات الاستخدام</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {useCases.map((useCase, idx) => (
                    <div key={idx} className={`bg-[#ffffff] p-8 rounded-xl flex flex-col items-start gap-4 hover:shadow-xl transition-all border-r-4 ${idx === 0 ? 'border-[#006a66]' : 'border-[#041534]'}`}>
                        <span className="material-symbols-outlined text-[#006a66] text-4xl">{useCase.icon}</span>
                        <h3 className="text-xl font-bold text-[#041534]">{useCase.title}</h3>
                        <p className="text-[#45464e] leading-relaxed">{useCase.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

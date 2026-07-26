import { ServiceDetailLayout } from "@/components/appraisal/google-stitch/service-detail/ServiceDetailLayout"
import { notFound } from "next/navigation";
import { servicesData } from "@/components/appraisal/google-stitch/services/serviceData";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return notFound();
    }

    return <ServiceDetailLayout service={service} />
}

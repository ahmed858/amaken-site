export type ServiceSlug = 'real-estate' | 'machinery' | 'facilities';

export type StepNumber = 1 | 2 | 3;

export interface AppraisalFormData {
    service: ServiceSlug | null;
    // Real Estate
    propertyType?: string;
    city?: string;
    neighborhood?: string;
    area?: string;
    buildingLicense?: string;
    deedNumber?: string;
    purpose?: string;
    // Machinery
    machineryType?: string;
    manufacturer?: string;
    yearOfManufacture?: string;
    condition?: string;
    machineryPurpose?: string;
    // Facilities
    facilityType?: string;
    activitySector?: string;
    annualRevenue?: string;
    yearsEstablished?: string;
    facilityPurpose?: string;
    // Common
    notes?: string;
}

export const SERVICE_META: Record<ServiceSlug, {
    titleAr: string;
    icon: string;
    descriptionAr: string;
    timeline: string;
}> = {
    'real-estate': {
        titleAr: 'التقييم العقاري',
        icon: 'domain',
        descriptionAr: 'عقارات سكنية وتجارية وأراضي',
        timeline: '3-5 أيام عمل'
    },
    'machinery': {
        titleAr: 'تقييم الآلات والمعدات',
        icon: 'precision_manufacturing',
        descriptionAr: 'آلات ومعدات ومركبات',
        timeline: '5-7 أيام عمل'
    },
    'facilities': {
        titleAr: 'تقييم المنشآت',
        icon: 'business_center',
        descriptionAr: 'شركات وعلامات تجارية',
        timeline: '7-14 يوم عمل'
    }
};

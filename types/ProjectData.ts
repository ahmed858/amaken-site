import { UnitData } from "./UnitData";

export interface ProjectData {
    id: string;
    slug: string; // "green-fields"
    name: { en: string; ar: string };
    description: { en: string; ar: string };
    location: { en: string; ar: string };
    type?: string;
    status?: string;
    statusAr?: string;
    year: number;
    images: string[];
    units: UnitData[];
    developer: { en: string; ar: string };
    totalUnits?: number;
}

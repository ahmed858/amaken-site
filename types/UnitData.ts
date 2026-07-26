
export interface UnitData {
    id: string;
    name: { en: string; ar: string };
    type: { en: string; ar: string }; // "Townhouse", "Villa"
    area: number;
    rooms: number;
    price?: number;
    image: string; // The main image on UnitCard
    planner_image: string; // The panner image for the modal
    description?: { en: string; ar: string };
    status: string;
    project_id?: string;
    city?: string;
    neighborhood?: string;
    authorization_number: string;
}

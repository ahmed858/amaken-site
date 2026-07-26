import { AuctionUnit } from "@/components/group/auctions/unit-types";

export interface Auction {
    name: string; // Frappe document name (ID)
    auction_name: string; // Title
    auction_start_date: string; // ISO Date
    auction_start_time: string; // HH:mm:ss
    auction_end_date: string; // ISO Date
    auction_end_time: string; // HH:mm:ss
    auction_type: "عن بعد" | "حضوري" | "هجين" | string;
    location?: string; // Region/Area
    city?: string;
    neighborhood?: string;
    platform?: string;
    auction_platform_link?: string;
    no_of_realestates?: number;
    code?: string;
    auction_image?: string; // Custom/Standard field for image
    is_published?: 0 | 1; // Check field
    starting_bid?: number; // Custom field for starting price
    status?: string; // Status from ERPNext
    youtube_url?: string;
    units?: any[]; // To be mapped to AuctionUnit[]
    mobasher_url?: string;
    general_authority_for_real_estate_approval_number?: string;
    brochure?: string;
}

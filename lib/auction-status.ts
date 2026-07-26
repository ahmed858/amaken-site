export type AuctionStatus = "active" | "ended" | "upcoming";

export interface StatusInfo {
    status: AuctionStatus;
    label: string;
    color: string;
    animate: boolean;
}

/**
 * Maps ERPNext status values to standardized auction status
 * Supports both English and Arabic status values
 */
export function getAuctionStatus(status?: string): AuctionStatus {
    const s = status?.toLowerCase()?.trim();
    
    if (s === "active" || s === "جاري" || s === "جارة") {
        return "active";
    }
    if (s === "ended" || s === "منتهي") {
        return "ended";
    }
    
    return "upcoming";
}

/**
 * Returns comprehensive status information for UI display
 */
export function getStatusInfo(status?: string): StatusInfo {
    const normalizedStatus = getAuctionStatus(status);
    
    switch (normalizedStatus) {
        case "active":
            return {
                status: "active",
                label: "المزاد جاري",
                color: "bg-green-500",
                animate: true
            };
        case "ended":
            return {
                status: "ended", 
                label: "المزاد منتهي",
                color: "bg-gray-400",
                animate: false
            };
        case "upcoming":
            return {
                status: "upcoming",
                label: "المزاد قادم", 
                color: "bg-yellow-500",
                animate: true
            };
        default:
            return {
                status: "upcoming",
                label: "المزاد قادم",
                color: "bg-yellow-500", 
                animate: true
            };
    }
}

/**
 * Maps auction status to unit card status
 */
export function getUnitStatus(status?: string): "active" | "ended" | "upcoming" {
    return getAuctionStatus(status);
}

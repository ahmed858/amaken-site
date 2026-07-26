export type AuctionUnitStatus = "active" | "ended" | "upcoming";

export interface AuctionUnit {
    id: string;
    auctionId: string;
    lotNumber: string;
    title: string;
    type: string;
    location: string;
    startingBid: number;
    highestBid: number;
    bidCount: number;
    status: AuctionUnitStatus;
    endDate?: string;
    image: string;
    custom_bidding_link?: string;
}

export const mockAuctionUnits: AuctionUnit[] = [
    {
        id: "u1",
        auctionId: "1",
        lotNumber: "1",
        title: "أرض سكنية حي عريض رقم الصك 3243522811300000",
        type: "أرض سكنية",
        location: "الرياض",
        startingBid: 422000,
        highestBid: 422000,
        bidCount: 11,
        status: "active",
        endDate: "2026-04-05T10:00:00Z",
        image: "/commercial-building-riyadh-saudi-arabia.jpg",
    },
    {
        id: "u2",
        auctionId: "1",
        lotNumber: "2",
        title: "أرض سكنية حي عريض رقم الصك 399635000771",
        type: "أرض سكنية",
        location: "الرياض",
        startingBid: 150000,
        highestBid: 208000,
        bidCount: 10,
        status: "active",
        endDate: "2026-04-05T11:00:00Z",
        image: "/modern-luxury-apartment-building.jpg",
    },
    {
        id: "u3",
        auctionId: "1",
        lotNumber: "3",
        title: "شقة سكنية حي الدار البيضاء رقم الصك -98507005932",
        type: "شقة سكنية",
        location: "الرياض",
        startingBid: 293000,
        highestBid: 293000,
        bidCount: 5,
        status: "active",
        endDate: "2026-04-05T12:00:00Z",
        image: "/construction-site-machinery.jpg",
    },
    {
        id: "u4",
        auctionId: "1",
        lotNumber: "4",
        title: "أرض سكنية حي أحد رقم الصك 610162000119",
        type: "أرض سكنية",
        location: "الرياض",
        startingBid: 316000,
        highestBid: 316000,
        bidCount: 6,
        status: "ended",
        image: "/commercial-building-riyadh-saudi-arabia.jpg",
    },
    {
        id: "u5",
        auctionId: "1",
        lotNumber: "5",
        title: "أرض سكنية تجارية حي ضاحية نمار رقم الصك 960621001064",
        type: "أرض سكنية تجارية",
        location: "الرياض",
        startingBid: 3050000,
        highestBid: 3150000,
        bidCount: 18,
        status: "upcoming",
        endDate: "2026-04-15T09:00:00Z",
        image: "/modern-luxury-apartment-building.jpg",
    },
];

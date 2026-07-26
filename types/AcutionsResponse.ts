import { Auction } from "./auction";

export interface AuctionsResponse {
    data: Auction[];
    total: number;
}

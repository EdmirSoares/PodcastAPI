import { IPodcast } from "./podcast-model";

export interface PodcastTransferModel{
    statusCode: number;
    body: IPodcast[];
}
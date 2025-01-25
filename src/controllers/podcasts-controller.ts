import { IncomingMessage, ServerResponse } from "http"
import { serviceListEpisodes } from "../services/list-episodes-services";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/filter-podcast-model";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastTransferModel = await serviceListEpisodes()

    res.writeHead(content.statusCode, { 'content-type': ContentType.APPLICATION_JSON });
    res.write(JSON.stringify(content.body))
    res.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse)=>{

    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, { "Content-Type": ContentType.APPLICATION_JSON})
    res.write(JSON.stringify(content.body))
    res.end()
} 
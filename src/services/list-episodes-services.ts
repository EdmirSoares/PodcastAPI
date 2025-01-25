import { PodcastTransferModel } from "../models/filter-podcast-model"
import { repoPodCast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }


    const data = await repoPodCast()

    responseFormat = {
        statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormat
}
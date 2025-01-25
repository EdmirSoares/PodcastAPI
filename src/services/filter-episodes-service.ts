import { repoPodCast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/filter-podcast-model"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] || ""

    const data = await repoPodCast(queryString)

    if (data.length > 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }

    responseFormat.body = data

    return responseFormat
}
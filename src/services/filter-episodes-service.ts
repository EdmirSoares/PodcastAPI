import { repoPodCast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async(podcastName: string)=>{
    const data = await repoPodCast(podcastName)

    return data
}
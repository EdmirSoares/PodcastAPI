import { repoPodCast } from "../repositories/podcasts-repository"

export const serviceListEpisodes = async () => {
    const data = await repoPodCast()

    return data
}
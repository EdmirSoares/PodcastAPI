import fs from "fs"
import path from "path"
import { IPodcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodCast = async (podcastName?: string): Promise<IPodcast[]> => {

    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
        jsonFile = jsonFile.filter((value: IPodcast) => value.podcastName === podcastName)
    }

    return jsonFile
}
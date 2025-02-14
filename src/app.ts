import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMEthod } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]

    if (request.method === HttpMEthod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMEthod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response)
    }

}
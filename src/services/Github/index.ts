import { RESTAPIRequest, RESTAPIRequestFetchStrategy } from '../../utils/Request/index.ts'
import { paramsParser } from './helpers.ts'
import { ENVIRONMENTS } from '../../constants/environments/index.ts'
import { GetGithubUsersParams, GetReposType, GetUserReposParams, GetUsersType } from './types.ts'

const RESTAPIStrategy = new RESTAPIRequestFetchStrategy()
const RESTAPIRequestMethod = new RESTAPIRequest(RESTAPIStrategy)

const headers: Record<string, string> = {
    'Authorization': ``,
    'Content-Type': 'application/json',
    'accept': 'application/vnd.github+json'
};

export const getUsers: GetUsersType = async <T>({ params }: GetGithubUsersParams): Promise<T> => {
    let url = `${ENVIRONMENTS.GITHUB_API_URL}/search/users`;

    if (params) {
        const pars = paramsParser(params)
        url += pars;
    }

    if(ENVIRONMENTS.GITHUB_API_TOKEN){
        headers.Authorization = `Bearer ${ENVIRONMENTS.GITHUB_API_TOKEN}`
    }


    return RESTAPIRequestMethod.get(url, {
        headers,
    });
}

export const getRepos: GetReposType = async  <T>({ username }: GetUserReposParams): Promise<T> => {
    const url = new URL(`${ENVIRONMENTS.GITHUB_API_URL}/users/${username}/repos`);

    if(ENVIRONMENTS.GITHUB_API_TOKEN){
        headers.Authorization = `Bearer ${ENVIRONMENTS.GITHUB_API_TOKEN}`
    }

    return RESTAPIRequestMethod.get(url, {
        headers,
    });
}


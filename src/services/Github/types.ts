
export type GetUserReposParams = {
    username: string;
};

export type GitHubRepository = {
    name: string;
    description: string | null;
    stargazers_count: number;
};

export type GitHubUser = {
    login: string;
    repos_url: string;
    repositories?: GitHubRepository[];
};

export type GitHubUserResponse = {
    items: GitHubUser[]
};

export type GetUsersType = <T>({ params }: GetGithubUsersParams) => Promise<T>;

export type GetReposType = <T>({ username }: GetUserReposParams) => Promise<T>;

export type GetGithubUsersParams = {
    params: {
        q: string;
        per_page: number;
    };
};


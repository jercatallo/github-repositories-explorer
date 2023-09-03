import { GitHubRepository } from "../../services/Github/types"

export type RepositoryExplorerPageType = React.FC

export type ListUsersType = React.FC<ListUsersProps>

export type GithubUserComponentType = React.FC<GithubUserComponentProps>

export type RepositoriesComponentType = React.FC<RepositoriesComponentProps>

export type ListUsersProps = {
    result: FormattedResult[]
    setIsUserSelected: React.Dispatch<React.SetStateAction<boolean>>
}

export type GithubUserComponentProps = {
    item: FormattedResult
    setIsUserSelected: React.Dispatch<React.SetStateAction<boolean>>
    index: number
    setShowList: React.Dispatch<React.SetStateAction<string[]>>
    showList: string[]
  }

export type FormattedResult = {
    login?: string;
    repositories?: GitHubRepository[];
    isError?: boolean
  };

export type RepositoriesComponentProps = {
    item: FormattedResult
    showList: string[]
    index: number
}


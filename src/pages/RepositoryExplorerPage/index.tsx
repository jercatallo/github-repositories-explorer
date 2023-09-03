import { useState, useMemo, useCallback, useEffect } from 'react'
import useInput from '../../hooks/useInput';
import { FormattedMessage } from 'react-intl';
import { getUsers, getRepos } from '../../services/Github'
import { PrimaryButton } from '../../components/UI/Buttons'
import { ListUsers } from './components';
import { ColoredCircleLoading } from '../../components/UI/Loading';
import { Input } from '../../components/UI/Input';
import { ENVIRONMENTS } from '../../constants/environments';
import { FormattedResult, RepositoryExplorerPageType } from './types';
import { GitHubRepository, GitHubUser, GitHubUserResponse } from '../../services/Github/types';
import { messages } from './messages';
import { messages as globalMessages } from '../../messages';

const RepositoryExplorerPage: RepositoryExplorerPageType = () => {
  const nameInput = useInput<string>('');
  const [result, setResult] = useState<FormattedResult[]>([])
  const [isUserSelected, setIsUserSelected] = useState<boolean>(true);
  const [searchedValue, setSeachedValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const isButtonDisabled = useMemo(() => {
    return !nameInput.bind.value || searchedValue == nameInput.bind.value
  }, [nameInput.bind.value, searchedValue])

  const formatUserObject = async ({ item }: { item: GitHubUser }): Promise<FormattedResult | false> => {
    try {
      const getReposRes = await getRepos<GitHubRepository[]>({ username: item.login })

      if (getReposRes) {
        item.repositories = getReposRes
        item.repositories = item.repositories?.map((repo) => {
          return {
            name: repo.name,
            description: repo.description,
            stargazers_count: repo.stargazers_count
          }
        })
      }
      return {
        login: item.login,
        repositories: item.repositories
      };
    } catch (err) {
      setShowError(true);
      return false
    }
  }

  const getGithubUsers = useCallback(async (): Promise<void> => {
    try {
      if (nameInput.bind.value) {
        const fetchGithubUsersRes = await getUsers<GitHubUserResponse>({
          params: {
            q: `${nameInput.bind.value}+type:User`,
            per_page: Number(ENVIRONMENTS.GITHUB_API_USER_PER_PAGE_LIMIT)
          }
        })

        let formattedResult: FormattedResult[] = [];

        if (fetchGithubUsersRes) {
          formattedResult = (await Promise.all(
            fetchGithubUsersRes.items.map(async (item: GitHubUser) => formatUserObject({ item }))
          )) as FormattedResult[];

          setResult(formattedResult);
          setSeachedValue(nameInput.bind.value);

        } else {
          setShowError(true);
        }
      }
    } catch (err) {
      setShowError(true);
    } finally {
      setIsLoading(false);
    }

  }, [nameInput.bind.value])

  const onSearch = useCallback(async (): Promise<void> => {
    setIsUserSelected(false);
    setShowError(false);
    setIsLoading(true)
    setResult([])
    setSeachedValue('')

    await getGithubUsers();
  }, [getGithubUsers])

  useEffect(() => {
    if (nameInput.keyPressed === 'Enter' && nameInput.bind.value) {
      onSearch()
    }
  }, [nameInput.keyPressed, nameInput.bind.value, onSearch])

  const ListUsersMemo = useMemo(() => {
    return <ListUsers result={result} setIsUserSelected={setIsUserSelected}></ListUsers>
  }, [result, setIsUserSelected])

  return (
    <div className="grid max-w-lg p-12 m-auto content-start" style={{ minWidth: '30rem' }}>
      <div className="w-full m-auto">
        <div className=" mb-6">
          <h1 className='font-bold mb-2 text-gray-600'><FormattedMessage {...messages.title} /></h1>
          <div className="w-full">
            <Input bind={nameInput.bind} placeholder='Enter username'></Input>
          </div>
        </div>
        <div>
          <PrimaryButton animation={{
            whileTap: { scale: 0.9, transition: { duration: 0.2 } }
          }} text="Search" onClick={() => onSearch()} disabled={isButtonDisabled || isLoading} />

          {searchedValue && result.length > 0 && <p className={`${!isUserSelected ? 'visible' : 'invisible'} my-2`}> <FormattedMessage {...messages.showingUsersFor} values={{ name: searchedValue }} /></p>}
          {searchedValue && result.length <= 0 && <p className={`my-2`}><FormattedMessage {...messages.noUsersMatched} /></p>}
          {showError && <p className={`text-red-600 mt-2`}><FormattedMessage {...globalMessages.somethingWentWrong} /></p>}
        </div>
        <div className="w-full m-auto overflow-auto"  style={{height: '68vh'}}>
        {isLoading && <ColoredCircleLoading wrapperStyle={{ margin: '3em auto auto auto' }}></ColoredCircleLoading>}
        {ListUsersMemo}

        </div>
      </div>
    </div>
  )
}

export default RepositoryExplorerPage


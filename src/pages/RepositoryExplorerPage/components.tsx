import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp, faStar } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import { motion } from 'framer-motion';
import { GithubUserComponentType, ListUsersType, RepositoriesComponentType } from "./types"
import { GitHubRepository } from "../../services/Github/types"
import { FormattedMessage } from "react-intl"
import { messages } from "./messages"

export const ListUsers: ListUsersType = ({ result, setIsUserSelected }) => {
  const [showList, setShowList] = useState<string[]>([])
  
  useEffect(()=>{
    setShowList([])
  },[result])

  return (
    <div>
      {result && result.map((item, index) => {
        return (
          <React.Fragment key={item.login}>
            <GithubUserComponent item={item} index={index} setIsUserSelected={setIsUserSelected} showList={showList} setShowList={setShowList} />
            <div id={`${item.login}`} >
              <RepositoriesComponent showList={showList} item={item} index={index} />
            </div>
          </React.Fragment>)
      })}
    </div>
  )
}

export const GithubUserComponent: GithubUserComponentType = ({ item, setIsUserSelected, index, setShowList, showList }) => {
  const onButtonSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault()
    setIsUserSelected(true)

    // To determine which repositories to show
    const arrCopy = JSON.parse(JSON.stringify(showList))

    if (arrCopy.includes(String(index))) {
      const selectedIndex = arrCopy.indexOf(String(index));
      arrCopy.splice(selectedIndex, 1);

      setShowList(arrCopy)
    } else {
      setShowList(state => [...state, String(index)])
    }
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}>
      <button onClick={(e) => onButtonSelect(e)} className={`w-full mb-2 flex justify-between bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded items-center`}>
        <span>{item.login}</span>
        {showList.includes(String(index)) ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </button>
    </motion.div>
  )
}

export const RepositoriesComponent: RepositoriesComponentType = ({ item, showList, index: userIndex }) => {
  return (
    <div>
      {item.repositories && item.repositories.length > 0 && item.repositories.map((repo: GitHubRepository, index) => (
        showList.includes(String(userIndex)) && <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * index }} key={repo.name} className="p-5 bg-gray-300 m-2">
          <p className='grid grid-cols-12  mb-4'>
            <span className='col-span-9 pr-2 font-bold text-gray-600'>
              {repo.name}

            </span>
            <span className='grid col-span-3 grid-cols-5 items-center text-right'>
              <span className='grid col-span-4 text-gray-700'>
                {repo.stargazers_count.toLocaleString('en')}
              </span>
              <span className='grid col-span-1'>
                <FontAwesomeIcon className='mx-1 text-gray-500' icon={faStar} />
              </span>

            </span>

          </p>
          <p className=''> {repo.description ? repo.description : <FormattedMessage {...messages.noDescription}></FormattedMessage>}
          </p>
        </motion.div>

      ))}
      {showList.includes(String(userIndex)) && item.repositories && item.repositories.length <= 0 && <motion.p initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }} className='m-2'><FormattedMessage {...messages.noRepository}></FormattedMessage> </motion.p>}
    </div>
  )
}
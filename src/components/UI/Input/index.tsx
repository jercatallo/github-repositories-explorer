import { InputType } from './types'

export const Input: InputType = ({ bind, placeholder }) => {
   return (
    <input {...bind} placeholder={placeholder} maxLength={50} className="transition duration-500 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
   )
}
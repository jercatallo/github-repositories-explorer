import { PrimaryButtonType } from './types'
import {motion} from 'framer-motion'

export const PrimaryButton: PrimaryButtonType = ({ disabled, onClick, text, animation }) => {
   return (
      <motion.button {...animation} disabled={disabled} onClick={onClick} className={`mt-1 select-none w-full shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded ${disabled && 'bg-gray-500 pointer-events-none'}`} type="button">
         {text}
      </motion.button>
   )
}
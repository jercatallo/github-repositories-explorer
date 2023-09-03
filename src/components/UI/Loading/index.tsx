import { ColorRing } from "react-loader-spinner"
import { ColoredCircleLoadingPropsType } from "./types"

export const ColoredCircleLoading: ColoredCircleLoadingPropsType = ({wrapperStyle}) => {
    return (<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{...wrapperStyle}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />)

} 
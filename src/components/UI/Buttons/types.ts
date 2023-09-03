export type PrimaryButtonProps = {
    disabled: boolean,
    onClick: () => void,
    text: string
    animation: object
 }

 export type PrimaryButtonType = React.FC<PrimaryButtonProps>
import ButtonStyle from "./Button.style"
import { IButtonComponentProps } from "./Button.types"

export const ButtonComponent = ({type='button', backgroundColor="#ff0", children}:IButtonComponentProps) => {
    return <ButtonStyle type={type} backgroundColor={backgroundColor}>{children}</ButtonStyle>
}
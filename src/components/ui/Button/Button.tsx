import "./Button.css"

interface ButtonProps {
    children: React.ReactNode;
    // onClick: React.ChangeEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ( { children } ) => {
    return (
        <button className="ui-button">
            {children}
        </button>
    )
}
  
export default Button
  
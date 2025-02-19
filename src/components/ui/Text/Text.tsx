import "./Text.css"

interface TextProps {
    children: React.ReactNode;
    // onClick: React.ChangeEventHandler<HTMLButtonElement>
}

const Text: React.FC<TextProps> = ( { children } ) => {
    return (
        <p className="ui-text">
            {children}
        </p>
    )
}
  
export default Text
  
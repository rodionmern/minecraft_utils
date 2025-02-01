import "./Input.css"

interface InputProps {
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ( { placeholder, value, onChange } ) => {
    return (
        <input placeholder={placeholder} value={value} onChange={onChange} className="ui-input"/>
    )
}
  
export default Input
  
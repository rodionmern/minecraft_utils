import "./Select.css"

interface SelectProps {
    name: string;
    // value: string;
    children: React.ReactNode;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ( { children, name, onChange } ) => {
    return (
        <select name={name} onChange={onChange} className="ui-select">
            {children}
        </select>
    )
}
  
export default Select
  
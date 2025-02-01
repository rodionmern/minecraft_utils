import "./Kopeechka.css"

interface KopeechkaProps {
    children: React.ReactNode;
}

const Kopeechka: React.FC<KopeechkaProps> = ( { children } ) => {
    return (
        <div className="kopeechka">
            {children}
        </div>
    )
}
  
export default Kopeechka
  
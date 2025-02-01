import "./Frame.css"

interface FrameProps {
    icon: string;
}

const Frame: React.FC<FrameProps> = ( { icon } ) => {
    return (
        <div className="ui-frame">
            <img src={icon} alt="" className="frame-image" />
        </div>
    )
}
  
export default Frame
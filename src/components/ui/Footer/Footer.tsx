import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import "./Footer.css"

const Footer = () => {
    const location = useLocation();

    return (
        <footer>
            <p>(c) RodionMern</p>
            {location.pathname !== "/" && <Link to="/" className="link">Go to Home page</Link>}
        </footer>
    )
}
  
export default Footer
  
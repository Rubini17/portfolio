import {Link} from "react-router-dom";
import "../css/nav.css"
const Navbar=()=>{
    return(
        <div>
            <header>
                <nav>
                    <li><Link to='/about' class="link">About</Link></li>
                     <li><Link to='/projects' class="link">Projects</Link></li>
                     <li><Link to='/resume' class="link">Resume</Link></li>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className = "header">
            <Link to = "/"><h1>CoviStat<span><FontAwesomeIcon icon={faVirus} /></span></h1></Link>
        </div>
     );
}
 
export default Header;
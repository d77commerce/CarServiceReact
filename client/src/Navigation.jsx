import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
      <nav>
        <Link to="/"><a>Home</a></Link>
        <Link to="/About"><a>About</a></Link>
        <Link to="/Services"><a>Services</a></Link>
        <Link to="/Contacts"><a>Contacts</a></Link>
      </nav>
  );
}

export default Navigation;


import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    className='navbar navbar-default navbar-dark bg-dark navbar-expand-md'
    role='navigation'
  >
    <div className='container-fluid'>
      <Link to='/' className='navbar-brand'>
        ExerTracker
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#nav-collapse'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='nav-collapse'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Exercises
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/create' className='nav-link'>
              Create Exercise Log
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/user' className='nav-link'>
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

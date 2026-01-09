import { navLinks, navIcons } from '../util/data';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src='./images/logo.svg' className='nav-logo' alt='backroads' />
            <button type='button' className='nav-toggle' id='nav-toggle'>
              <i class='fas fa-bars'></i>
            </button>
          </div>

          <ul class='nav-links' id='nav-links'>
            {navLinks.map((link) => (
              <li>
                <a href={link.url} class='nav-link'>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <ul class='nav-icons'>
            {navIcons.map((item) => (
              <li>
                <a
                  href={item.url}
                  rel='noreferrer'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

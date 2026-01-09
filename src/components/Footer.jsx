import { navLinks, navIcons } from '../util/data';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {navLinks.map((link) => (
          <li>
            <a href={link.url} className='footer-link'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className='footer-icons'>
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
      <p className='copyright'>
        copyright{' '}
        <a rel='noreferrer' target='_blank' href='https://www.vallants.com/'>
          &copy;Vallants
        </a>
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;

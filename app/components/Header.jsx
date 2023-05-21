// react-icons
import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='header'>
        <div className='section-container'>
          <Link className='logo' href={'/'}>
            <h3 className='logo-text'>S_</h3>
          </Link>
          {/* /logo */}

          <nav className='nav'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <Link href={'/'} className='nav-link'>
                  <AiFillHome className='nav-link__icon' />
                  <span className='nav-link__text'>Home</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'notification'} className='nav-link'>
                  <MdNotifications className='nav-link__icon' />
                  <span className='nav-link__text'>Notification</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'cart'} className='nav-link'>
                  <AiOutlineShoppingCart className='nav-link__icon' />
                  <span className='nav-link__text'>Event Cart</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'bid'} className='nav-link'>
                  <BiDollar className='nav-link__icon' />
                  <span className='nav-link__text'>Event Bid</span>
                </Link>
              </li>
            </ul>

            <Link className='button-primary' href={'login'}>
              Login
            </Link>

            {/* if user is logedin */}
            {/*
            <Link href={'user'} className='button-primary icon'>
              <FaUser />
            </Link>
            */}
          </nav>
        </div>
        {/* /section-container */}
      </header>
    </>
  );
}

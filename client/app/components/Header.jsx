'use client';

// react-icons
import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';
import { BsChatDotsFill } from 'react-icons/bs';
import { FaUser, FaUserFriends } from 'react-icons/fa';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Logo() {
  return (
    <Link className='logo' href={'/'}>
      <h3 className='logo-text'>S_</h3>
    </Link>
  );
}

function UserAuth() {
  return (
    <>
      <Link className='button-primary' href={'login'}>
        Login
      </Link>

      {/* if user is logedin */}
      {/*
      <Link href={'user'} className='button-primary icon'>
        <FaUser />
      </Link>
      */}
    </>
  );
}

function GeneralNavigation() {
  return (
    <nav className='nav'>
      <Link href={'/about'} className='nav-link__general'>
        about us
      </Link>
    </nav>
  );
}

// Navigation bar for organization page
function OrganizationNavigation() {
  return (
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

      <UserAuth />
    </nav>
  );
}

// Navigation bar for club page
function ClubNavigation() {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link href={'/'} className='nav-link'>
            <AiFillHome className='nav-link__icon' />
            <span className='nav-link__text'>Home</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href={'notification/'} className='nav-link'>
            <MdNotifications className='nav-link__icon' />
            <span className='nav-link__text'>Notification</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href={'collaboration/'} className='nav-link'>
            <FaUserFriends className='nav-link__icon' />
            <span className='nav-link__text'>Collaboration</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href={'chat/'} className='nav-link'>
            <BsChatDotsFill className='nav-link__icon' />
            <span className='nav-link__text'>Chat</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href={'bid/'} className='nav-link'>
            <BiDollar className='nav-link__icon' />
            <span className='nav-link__text'>Event Bid</span>
          </Link>
        </li>
      </ul>

      <UserAuth />
    </nav>
  );
}

export default function Header() {
  // gets the current url path
  const currentPage = usePathname();
  let CurrentNavigation = GeneralNavigation;

  // changes the navigation bar according to the current page
  if (currentPage.toLowerCase().includes('/organization')) {
    CurrentNavigation = OrganizationNavigation;
  } else if (currentPage.toLowerCase().includes('/club')) {
    CurrentNavigation = ClubNavigation;
  }

  return (
    <>
      <header className='header '>
        <div className='section-container'>
          <Logo />
          <CurrentNavigation />
        </div>
      </header>
    </>
  );
}

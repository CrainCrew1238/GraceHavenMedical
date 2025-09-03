'use client'
import * as React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink'
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import { usePathname } from 'next/navigation';

import styles from '../layout.module.css';
import OfferMenu from '@/components/offer-menu.tsx';

export default function MainNav(dictionary: any) {
  const pathname = usePathname();

  const listenScrollEvent = () => {
    if (window.scrollY < 50) {
      document.getElementById('mainNav')?.classList.add(styles.mainNavDefaultState);
      document.getElementById('mainNav')?.classList.remove(styles.mainNav);
    } else {
      document.getElementById('mainNav')?.classList.remove(styles.mainNavDefaultState);
      document.getElementById('mainNav')?.classList.add(styles.mainNav);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <Navbar id="mainNav" expand="lg" fixed="top" className={styles.mainNavDefaultState}>
      <Container>
        <div className={styles.navbarHeader}>
          <NavbarBrand href="/" className={styles.navbarBrand}>
            <Image
              height="54"
              width="300"
              alt="Grace Haven Medical"
              src="dr85cqwlh/image/upload/v1723586969/ghm_logo_hpf4zs.svg"
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" className={styles.navbarToggle} />
        </div>
        <NavbarCollapse id="basic-navbar-nav" className="ml-3">
          <Nav className="me-auto d-flex align-items-center gap-4">
            <NavLink href={`/memberships`} className="px-3">{dictionary?.dictionary?.pageTitles?.memberships.toUpperCase()}</NavLink>
            <OfferMenu dictionary={dictionary.dictionary} />
            <NavLink href={`/about-us`} className="px-3">{dictionary?.dictionary?.pageTitles?.aboutUs.toUpperCase()}</NavLink>
            <NavDropdown title={dictionary?.dictionary?.pageTitles.shop.toUpperCase()} id="shop-nav-dropdown" className="px-3">
              <DropdownItem href={'https://www.vagaro.com/cl/gRaR6piiSY-bXIAXxPfDlim6IhST9IWXQJ--2XSWQhs='}>{dictionary?.dictionary?.pageTitles?.glucoferrin.toUpperCase()}</DropdownItem>
              <DropdownItem href={`/crunchi-skincare`}>{dictionary?.dictionary?.pageTitles?.crunchi.toUpperCase()}</DropdownItem>
              <DropdownItem href={`/patchaid-vitamins`}>{dictionary?.dictionary?.pageTitles?.patchAid.toUpperCase()}</DropdownItem>
            </NavDropdown>
            <NavLink href={`/contact-us`} className="px-3">{dictionary?.dictionary?.pageTitles?.contact.toUpperCase()}</NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title={dictionary?.dictionary?.locales?.language.toUpperCase()} id="language-nav-dropdown" className="px-3">
              <DropdownItem href={`/en/${pathname.split('/')[2] || ''}`}>{dictionary?.dictionary?.locales?.english.toUpperCase()}</DropdownItem>
              <DropdownItem href={`/es/${pathname.split('/')[2] || ''}`}>{dictionary?.dictionary?.locales?.spanish.toUpperCase()}</DropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

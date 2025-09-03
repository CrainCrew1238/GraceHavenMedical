import * as React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink'
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import styles from './offer-menu.module.css';
import { usePathname } from 'next/navigation';

//  TODO: NO! THIS IS BAD!!!
export default function OfferMenu(dictionary: any) {
  const pathname = usePathname();

  // WHY?!?!
  //  \/
  const lang = pathname.split('/')[1];

  return (
    <NavDropdown className="offer-dropdown" title={dictionary?.dictionary?.pageTitles?.offerings.toUpperCase()} id="basic-nav-dropdown">
      <Container>
        <Row>
          <Col md="6">
            <div className={styles.offerHeader}>{dictionary?.dictionary?.links?.headers?.therapies.toUpperCase()}</div>
            {dictionary?.dictionary?.links.therapies?.map((therapy: any, index: number) => (
              <div className={styles.menuLink} key={`therapy-link-${index}`}>
                <Button variant="link" href={`${therapy.link}`}>
                  <div className={styles.menuTitle}>{therapy.title.toUpperCase()}</div>
                  <div className={styles.menuSubtitle}>{therapy.subtitle.toUpperCase()}</div>
                </Button>
              </div>
            ))}
          </Col>
          <Col md="6">
            <div className={styles.offerHeader}>{dictionary?.dictionary?.links?.headers?.diagnostics.toUpperCase()}</div>
            {dictionary?.dictionary?.links.diagnostics?.map((therapy: any, index: number) => (
              <div className={styles.menuLink} key={`therapy-link-${index}`}>
                <Button variant="link" href={`${therapy.link}`}>
                  <div className={styles.menuTitle}>{therapy.title.toUpperCase()}</div>
                  <div className={styles.menuSubtitle}>{therapy.subtitle.toUpperCase()}</div>
                </Button>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </NavDropdown >
  )
}

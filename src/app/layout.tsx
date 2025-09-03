import { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import MainNav from './components/MainNav.tsx';

const fb = 'dr85cqwlh/image/upload/v1723586769/social-fb_uyrqnq.svg';
const ig = 'dr85cqwlh/image/upload/v1723586770/social-ig_omwj3q.svg';
const li = 'dr85cqwlh/image/upload/v1723586769/social-li_stic17.svg';

const fbFooter = 'dr85cqwlh/image/upload/v1724070360/fb-dark_q7rfqi.svg';
const igFooter = 'dr85cqwlh/image/upload/v1724070361/ig-dark_td8cgn.svg';

const logoFooter = 'dr85cqwlh/image/upload/v1724069527/logo-footer_q2xn53.svg';

const lSUrl = 'https://static.legitscript.com';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './bootstrap-overrides.css';
import styles from './layout.module.css';
import {getDictionary} from "@/lib/dictionaries.ts";

const raleway = Raleway({ subsets: ['latin'] });

// TODO: Since this is the "HERO" / "LANDING" page we should really change this to something shorter aka "Cellular Detox & Weight Loss in Tampa, FL"
export const metadata: Metadata = {
  title: 'Grace Haven Medical: Cellular Detox & Weight Loss in Tampa, FL',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = await getDictionary();

  return (
    <html lang='en'>
      <body className={raleway.className} style={{ background: '#fff' }}>
        <Container fluid className={styles.topBar}>
          <Container className="d-block">
            <Row className="align-items-center py-4">
              <Col xs="12" md="9" className={`${styles.padding0xxs} mb-2 mb-md-0`}>
                <Row>
                  <Col xs="12" sm="auto"
                       className={`${styles.contactInfo} text-center text-sm-start text-white fw-semibold fs-7`}>
                    <a href="tel:+18134359193" className="d-inline-block fs-3 fw-bold mb-2">
                      (813) 435-9193
                    </a>
                    <div className="pe-2 ps-2 d-none d-sm-inline-block">|</div>
                    <div className="d-block d-sm-inline-block mt-1 mt-sm-0 fs-6 text-white mb-1">
                      23080 Tabak Ln, Land O' Lakes, FL 34639
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs="12" md="3" className={`${styles.padding0xxs} text-center text-md-end`}>
                <div className="d-inline-block">
                  <Link className={styles.socialLink} href="https://www.facebook.com/gracehavenmedical">
                    <Image src={fb} height={24} width={24} alt="Check out Grace Haven Medical on Facebook!" />
                  </Link>
                  <Link className={styles.socialLink} href="https://www.instagram.com/gracehaventampa/">
                    <Image src={ig} height={24} width={24} alt="Check out Grace Haven Medical on Instagram!" />
                  </Link>
                  <Link className={styles.socialLink} href="https://www.linkedin.com/company/grace-haven-medical-cellular-detox-and-weight-loss">
                    <Image src={li} height={24} width={24} alt="Check out Grace Haven Medical on LinkedIn!" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <MainNav dictionary={dict} />
        <main>
          {children}
        </main>
        <footer className={styles.footer}>
          <Container>
            <Row>
              <Col md="9">
                <Image src={logoFooter} height={255} width={300} alt="Grace Haven Medical" />
                <div className={styles.contactSmall}>
                  <div>{dict.footer.phoneNumber}: <a href="tel:+18134359193">(813) 435-9193</a></div>
                  <div>SMS: <a href="tel:+18134359332">(813) 435-9332</a></div>
                  <div>23080 Tabak Ln, Land O' Lakes, FL 34639</div>
                </div>
                <div className={styles.contactHours}>
                  <div>{dict.footer.monThursFri}</div>
                  <div>{dict.footer.saturday}</div>
                  <div>{dict.footer.outside}</div>
                </div>
                <div className={styles.disclaimer}>
                  <div>{dict.footer.disclaimer1}</div>
                  <div>{dict.footer.disclaimer2}</div>
                  <div>{dict.footer.returns}</div>
                  <div><Button id="open-btn" variant="link" style={{ color: '#aa9c91' }} className="m-0 p-0">{dict.footer.privacy}</Button></div>
                  <a href="https://www.legitscript.com/websites/?checker_keywords=gracehavenmedical.com" target="_blank" title="Verify LegitScript Approval">
                    <img src={`${lSUrl}/seals/26668531.png`} alt="LegitScript approved" width="140" height="120" style={{ border: 0 }} />
                  </a>
                  <div id="privacy-modal" className="modal fade">
                    <ModalDialog className="modal-lg">
                      <ModalHeader>
                        <ModalTitle>{dict.footer.privacy}</ModalTitle>
                      </ModalHeader>
                      <ModalBody dangerouslySetInnerHTML={{ __html: dict.footer.hipaa }}></ModalBody>
                      <ModalFooter>
                        <Button variant="secondary" id="close-btn">
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalDialog>
                  </div>
                </div>
                <div className={styles.footerSocial}>
                  <Link className={styles.socialLink} href="https://www.facebook.com/gracehavenmedical">
                    <Image src={fbFooter} height={24} width={24} alt="Grace Haven Medical is on Facebook!" />
                  </Link>
                  <Link className={styles.socialLink} href="https://www.instagram.com/gracehaventampa/">
                    <Image src={igFooter} height={24} width={24} alt="Grace Haven Medical is on Instagram!" />
                  </Link>
                </div>
              </Col>
              <Col md="3">
              </Col>
            </Row>
          </Container>
          <Container>
            <hr />
            <div className="mt-5">&copy; 2025 Grace Haven Medical. All Rights Reserved.</div>
          </Container>
        </footer>
      </body>
    </html>
  );
}

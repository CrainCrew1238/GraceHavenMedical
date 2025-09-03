'use client'
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Spinner from 'react-bootstrap/Spinner'
import Script from 'next/script';
import {getDictionary} from "@/lib/dictionaries.ts";
import {useEffect} from "react";

const ContactPage = () => {
  const [dict, setDict] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getDict = async () => {
      const tempDict = await getDictionary();
      setDict(tempDict);
      setLoading(false);
    }
    getDict();
  }, [])

  return (
    <div>
      <Script id="vagaro-script" type="text/javascript" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: process.env.widgetJS || '' }}></Script>
      <Container className="py-5" fluid style={{ backgroundColor: '#fff', color: "#aa9c91" }}>
        <Container>
          {loading ? <Spinner variant="dark" /> : (
            <>
              <h2>{dict?.contactUs.title}</h2>
              <p>{dict?.contactUs.text}</p>
              <Row>
                <Col md="6">
                  <Form>
                    <FormGroup className="mb-3" controlId="contactForm.name">
                      <FormLabel>{dict?.contactUs.name}</FormLabel>
                      <FormControl type="text" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="contactForm.email">
                      <FormLabel>{dict?.contactUs.email}</FormLabel>
                      <FormControl type="email" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="contactForm.phone">
                      <FormLabel>{dict?.contactUs.phone}</FormLabel>
                      <FormControl type="text" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="contactForm.message">
                      <FormLabel>{dict?.contactUs.message}</FormLabel>
                      <FormControl as="textarea" type="text" />
                    </FormGroup>
                  </Form>
                  {/* <div id='frameTitle' className='embedded-widget-title' style={{ fontSize: '23px', color: '#333', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '24px', padding: '18px 10px 8px', textAlign: 'center', boxSizing: 'border-box' }}>Services and Memberships</div><div className="vagaro" style={{ width: 250, padding: 0, border: 0, margin: '0 auto', textAlign: 'center' }}><a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;<a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;<a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;<a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a></div> */}
                </Col>
                <Col md="6">
                  <Row>
                    <Col md="6">
                      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z" fill="currentColor"></path>
                      </svg>
                      <h4>{dict?.contactUs.email}</h4>
                      <p><a href="mailto:imready@gracehavenmedical.com">imready@gracehavenmedical.com</a></p>
                    </Col>
                    <Col md="6">
                      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.707 12.293C17.6142 12.2 17.504 12.1263 17.3827 12.076C17.2614 12.0257 17.1313 11.9998 17 11.9998C16.8687 11.9998 16.7386 12.0257 16.6173 12.076C16.496 12.1263 16.3858 12.2 16.293 12.293L14.699 13.887C13.96 13.667 12.581 13.167 11.707 12.293C10.833 11.419 10.333 10.04 10.113 9.30096L11.707 7.70696C11.7999 7.61417 11.8737 7.50397 11.924 7.38265C11.9743 7.26134 12.0002 7.13129 12.0002 6.99996C12.0002 6.86862 11.9743 6.73858 11.924 6.61726C11.8737 6.49595 11.7999 6.38575 11.707 6.29296L7.707 2.29296C7.61421 2.20001 7.50401 2.12627 7.38269 2.07596C7.26138 2.02565 7.13133 1.99976 7 1.99976C6.86866 1.99976 6.73862 2.02565 6.6173 2.07596C6.49599 2.12627 6.38579 2.20001 6.293 2.29296L3.581 5.00496C3.201 5.38496 2.987 5.90696 2.995 6.43996C3.018 7.86396 3.395 12.81 7.293 16.708C11.191 20.606 16.137 20.982 17.562 21.006H17.59C18.118 21.006 18.617 20.798 18.995 20.42L21.707 17.708C21.7999 17.6152 21.8737 17.505 21.924 17.3837C21.9743 17.2623 22.0002 17.1323 22.0002 17.001C22.0002 16.8696 21.9743 16.7396 21.924 16.6183C21.8737 16.4969 21.7999 16.3867 21.707 16.294L17.707 12.293ZM17.58 19.005C16.332 18.984 12.062 18.649 8.707 15.293C5.341 11.927 5.015 7.64196 4.995 6.41896L7 4.41396L9.586 6.99996L8.293 8.29296C8.17546 8.41041 8.08904 8.55529 8.04155 8.71453C7.99406 8.87376 7.987 9.04231 8.021 9.20496C8.045 9.31996 8.632 12.047 10.292 13.707C11.952 15.367 14.679 15.954 14.794 15.978C14.9565 16.0129 15.1253 16.0064 15.2846 15.9591C15.444 15.9117 15.5889 15.825 15.706 15.707L17 14.414L19.586 17L17.58 19.005V19.005Z" fill="currentColor"></path>
                      </svg>
                      <h4>{dict?.contactUs.call}: <a href="tel:+18134359193">(813) 435-9193</a></h4>
                      <h4>SMS: <a href="tel:+18134359332">(813) 435-9332</a></h4>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </Container>
    </div>
  )
}

export default ContactPage;

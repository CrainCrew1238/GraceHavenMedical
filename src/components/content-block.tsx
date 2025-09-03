"use client";

import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

interface ContentBlockProps {
  bgColor: string;
  textColor: string;
  buttonUrl?: string;
  buttonText?: string;
  height: number;
  featuredImage?: string;
  embeddedContent?: string;
  imagePosition: 'left' | 'right';
  imageWidth: number;
  sectionContent?: { __html: string };
  button2Url?: string;
  button2Text?: string;
  children?: React.ReactNode;
}

export default function ContentBlock(props: ContentBlockProps) {
  return (
    <div>
      <Container fluid className="m-0 p-0 d-flex align-items-center" style={{ color: props.textColor, backgroundColor: props.bgColor, minHeight: props.height }} >
        <Container>
          <Row className="align-items-center">
            <Col xs="12" md="6" className={`${props.imagePosition === 'right' ? 'order-2' : 'order-1'} py-3`}>
              {props.featuredImage ? <Image width={0} height={0} style={{ width: '100%', height: 'auto', borderRadius: 10, boxShadow: props.imagePosition === 'right' ? '8px 2px 5px #0003' : '-8px 2px 5px #0003' }} src={props.featuredImage} alt="Section Image" /> : props.embeddedContent ? <div dangerouslySetInnerHTML={{ __html: props.embeddedContent }} /> : null}
            </Col>
            <Col xs="12" md="6" className={`${props.imagePosition === 'right' ? 'order-1' : 'order-2'} py-3`}>
              {props.sectionContent ? (
                <>
                  <div dangerouslySetInnerHTML={props.sectionContent} />
                  {props.buttonUrl && <Button className="py-2 px-3 mt-4" href={props.buttonUrl}>{props.buttonText?.toUpperCase()}</Button>}
                  {props.button2Url && <Button className="px-3 py-2 mt-4 ms-xs-2 ms-sm-0 ms-lg-2" href={props.button2Url}>{props.button2Text?.toUpperCase()}</Button>}
                </>
              ) : (
                <>{props.children}</>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </div >
  );
}

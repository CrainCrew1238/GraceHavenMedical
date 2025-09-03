import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Great_Vibes } from 'next/font/google';
import styles from './featured-plan.module.css';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

interface FeaturedPlanProps {
  planInfo?: any;
  planDetails: any;
}

export default function FeaturedPlan(props: FeaturedPlanProps) {
  const planDetailsLiLength = props.planDetails.listItems.length;
  const planDetailsFirstHalf = props.planDetails.listItems.slice(0, planDetailsLiLength / 2);
  const planDetailsSecondHalf = props.planDetails.listItems.slice(planDetailsLiLength / 2);

  return (
    <Container fluid className="py-5 align-items-center" style={{ backgroundColor: '#eee' }} >
      {props.planDetails.title && <h2 className={greatVibes.className} style={{ fontSize: '2.75rem', color: '#aa9c91', textAlign: 'center' }}>{props.planDetails.title}</h2>}
      <Container>
        <Row className="text-start">
          {props.planInfo && (
            <Col md="6" style={{ color: '#aa9c91', marginTop: '2rem' }}>
              <h2>{props.planInfo.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.planInfo.content }} />
            </Col>
          )}
          <Col sm={props.planInfo ? '6' : '9'} className={props.planInfo ? styles.planWrapperBasic : styles.planWrapper}>
            <Row>
              <Col md="8">
                <h3>{props.planDetails.programTitle}</h3>
                {props.planDetails.programSubtitle && <strong>{props.planDetails.programSubtitle}</strong>}
                <p>{props.planDetails.programDescription}</p>
              </Col>
              <Col md="4" className="text-center">
                <h2 className={styles.planPricing}>{props.planDetails.price}</h2>
              </Col>
            </Row>
            <hr className={styles.hr} />
            <p className="text-start">{props.planDetails.listItemText}</p>
            <Row>
              <Col sm="6">
                <ul className={styles.planList}>
                  {planDetailsFirstHalf.map((item: any, idx: number) => (
                    <li key={`plan-details-1-${idx}`}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col sm="6">
                <ul className={styles.planList}>
                  {planDetailsSecondHalf.map((item: any, idx: number) => (
                    <li key={`plan-details-2-${idx}`}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Button className="w-100 py-2" href={props.planDetails.buttonLink}>{props.planDetails.buttonText.toUpperCase()}</Button>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

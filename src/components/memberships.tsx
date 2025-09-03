import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import MembershipBlock from './membership-block';
import { Great_Vibes } from 'next/font/google';

import styles from './memberships.module.css';
import {getDictionary} from "@/lib/dictionaries.ts";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default async function Memberships() {
  const dict = await getDictionary();

  return (
    <div style={{ backgroundColor: '#fff', paddingBottom: '4rem' }}>
      <Container fluid className="m-0 p-0 text-center">
        <h2 className={greatVibes.className} style={{ fontSize: '2.75rem', color: '#aa9c91', textAlign: 'center' }}>{dict.homePage.membershipPlans.title}</h2>
        <Container className={styles.membershipContent}>
          <div>
            {dict.homePage.membershipPlans.bodyText}
          </div>
        </Container>
        <Container>
          <Row className={styles.membershipPlans}>
            {/* TODO: BECAUSE OF THE TERRIBLE TYPING - I'VE SET THIS TO ANY TO SUPPRESS ERRORS. :( */}
            {(dict.homePage.membershipPlans.plans as any[]).map((plan: any, idx: number) => (
                <MembershipBlock key={`plan-${idx}`} plan={plan as any} />
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

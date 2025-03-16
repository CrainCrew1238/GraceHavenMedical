import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import styles from './leadership-team.module.css';

interface RosterItem {
  name: string,
  title: string,
  text?: string,
  imageURI: string
}

interface LeadershipTeamProps {
  name: string,
  items: Array<RosterItem>
}

export default function LeadershipTeam(props: LeadershipTeamProps) {
  return (
    <Container fluid style={{ color: '#aa9c91', backgroundColor: '#ffffff' }}>
      <Container className="pt-4 pb-4">
        <h2>{props.name}</h2>
        <Row className="mt-4">
          {props.items.map((item) => (
            <Col md="3" className="mt-4 mb-4" key={`${item.name}`}>
              <Image className={styles.leadershipTeamImage} src={item.imageURI} alt={`${item.name} image`} width={296} height={355} />
              <strong>{item.name.toUpperCase()}</strong>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

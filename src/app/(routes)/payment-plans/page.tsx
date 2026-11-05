import Container from 'react-bootstrap/Container';
import CherryWidget from '@/components/cherry-widget';

export default function FinancingPage() {
  return (
    <main className="py-5" style={{ backgroundColor: '#ffffff', color: '#aa9c91' }}>
      <Container>
        <h1 className="mb-3">Payment Plans</h1>
        <CherryWidget />
      </Container>
    </main>
  );
}

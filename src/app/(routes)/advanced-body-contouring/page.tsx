import type { Metadata } from 'next';
import ServicePage from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Advanced Body Contouring | Grace Haven Medical',
  description: 'Consultation-led advanced body contouring and body-composition services in Land O’ Lakes, Florida.',
};

export default function AdvancedBodyContouringPage() {
  return <ServicePage
    eyebrow="Advanced body contouring"
    title="A more tailored approach to body goals."
    introduction="Begin with a thoughtful conversation about your goals, body composition, and preferred approach. Our team pairs a personalized plan with advanced body-contouring technology to create an experience that fits you."
    focusTitle="Consultation-led contouring and body-composition support"
    focusItems={[
      { title: 'Body composition insight', text: 'Use Fit3D body-composition visualization to establish a meaningful starting point and follow your progress over time.' },
      { title: 'Body contouring options', text: 'Explore non-invasive contouring experiences selected around your goals, timeline, and consultation.' },
      { title: 'Muscle stimulation options', text: 'Discuss technology-supported sessions designed to complement your movement, wellness, and body-confidence goals.' },
    ]}
    technologyTitle="Technology available for your personalized plan"
    technologyItems={['Fit3D 3D Body Scanner', 'VelaShape III', 'EMS-20', 'SculpSure', 'Laser Lipo Device', 'S16 Cryolipolysis Device']}
    closing="Every body and every goal is different. Book a consultation so we can help you understand the options that best align with yours."
  />;
}

import type { Metadata } from 'next';
import ServicePage from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Our Technology | Grace Haven Medical',
  description: 'Explore the advanced wellness, body-composition, body-contouring, and aesthetic technology at Grace Haven Medical.',
};

export default function OurTechnologyPage() {
  return <ServicePage
    eyebrow="Our technology"
    title="Technology with a purpose: your personalized experience."
    introduction="At Grace Haven Medical, technology is one part of a thoughtful, person-first wellness experience. We use it to inform conversations, broaden your options, and support a plan built around your goals."
    focusTitle="Explore the technology behind our experiences"
    focusItems={[
      { title: 'Understand your starting point', text: 'Fit3D body-composition visualization helps make the consultation more personal and progress easier to see.' },
      { title: 'Shape your wellness plan', text: 'Our body-contouring, recovery, and aesthetic technology gives you a broader range of options to discuss with our team.' },
      { title: 'Choose what fits you', text: 'Your provider helps you decide which experiences align with your goals, preferences, and overall plan.' },
    ]}
    technologyTitle="Our advanced technology"
    technologyItems={['Fit3D 3D Body Scanner', 'VitalHealth Full-Spectrum Sauna with PEMF Mat', 'GHM Low-Frequency PEMF Mats', 'High-Frequency PEMF Double Mat', '980 nm Body Infrared LED Light Panel', 'Full-Body Red-Light Therapy Devices', 'VelaShape III', 'EMS-20', 'EMS-Face', 'SculpSure', 'Laser Lipo Device', 'S16 Cryolipolysis Device', '7D RF/HIFU Skin-Tightening System', 'Juvasonic', 'Head Spa & Foot Detox Beds', 'Wellness Pod']}
    closing="We’ll help you understand the technology available at Grace Haven Medical and choose an experience that feels right for your goals."
  />;
}

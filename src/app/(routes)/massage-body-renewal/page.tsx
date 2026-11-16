import type { Metadata } from 'next';
import ServicePage from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Massage & Body Renewal | Grace Haven Medical',
  description: 'Massage, hot-stone, stretch, and recovery-oriented services in Land O’ Lakes, Florida.',
};

export default function MassageBodyRenewalPage() {
  return <ServicePage
    eyebrow="Massage & body renewal"
    title="Make space to reset, restore, and feel renewed."
    introduction="Our massage and body-renewal experiences are designed around your comfort, preferences, and goals. Choose a moment of relaxation, focused bodywork, or a recovery-oriented session in an inviting wellness setting."
    focusTitle="Massage and body-care experiences shaped around you"
    focusItems={[
      { title: 'Full-body massage', text: 'Settle into a personalized session focused on comfort, relaxation, and the areas you would like to address.' },
      { title: 'Deep tissue and sports massage', text: 'Choose a more focused bodywork experience with your session tailored to your activity level and preferences.' },
      { title: 'Hot stone, stretch, and recovery add-ons', text: 'Enhance your visit with available hot-stone, stretch, or recovery-focused options discussed with your provider.' },
    ]}
    technologyTitle="Thoughtful tools for a more complete experience"
    technologyItems={['Goodtar Hot-Stone Kit & Warmer', 'AMETHYST LAKE Oil & Lotion Warmer', 'Premium Digital Gel & Oil Warmer', 'Rapid Release Traveler Handheld Massager', 'Sound Therapy Audio System']}
    closing="Tell us how you want to feel when you leave. We’ll help you choose a massage or body-renewal experience that feels right for you."
  />;
}

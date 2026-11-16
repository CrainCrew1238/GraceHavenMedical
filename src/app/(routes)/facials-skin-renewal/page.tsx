import type { Metadata } from 'next';
import ServicePage from '@/components/service-page';

export const metadata: Metadata = {
  title: 'Facials & Skin Renewal | Grace Haven Medical',
  description: 'Customized facials and skin-renewal experiences in Land O’ Lakes, Florida.',
};

export default function FacialsSkinRenewalPage() {
  return <ServicePage
    eyebrow="Facials & skin renewal"
    title="Skin care that begins with your goals."
    introduction="Whether you want a refreshing reset, a deeper cleansing experience, or a more advanced facial consultation, our team helps you select a plan that supports the way you want your skin to look and feel."
    focusTitle="A tailored facial experience, never a one-size-fits-all routine"
    focusItems={[
      { title: 'Customized facials', text: 'Start with your skin goals and preferences, then choose a facial experience tailored to the moment.' },
      { title: 'Cleansing and hydration', text: 'Explore options centered on fresh, comfortable, and well-supported skin.' },
      { title: 'Advanced facial consultation', text: 'Discuss technology-supported facial renewal options with a Grace Haven Medical provider.' },
    ]}
    technologyTitle="Technology that supports our facial experiences"
    technologyItems={['EMS-Face', '7D RF/HIFU Skin-Tightening System', 'Juvasonic', 'HSONBIUTY Facial Steamer', 'ZDEER GS5 Heated Gua Sha Kit', 'CONFUTURY Face & Neck Gua Sha']}
    closing="A great facial starts with listening. Book a consultation or service and we’ll help you choose an experience tailored to your skin goals."
  />;
}

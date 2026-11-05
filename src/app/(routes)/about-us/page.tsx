import MediaBlock from '@/components/video-block';
import ContentBlock from '@/components/content-block';
import LeadershipTeam from '@/components/leadership-team';
import Container from 'react-bootstrap/Container';
import {getDictionary} from "@/lib/dictionaries.ts";

const aboutUsMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1727039472/about-us-video-block-1_brgp28.mp4';

const aboutUsContentBlock1 = 'dr85cqwlh/image/upload/v1727041977/about-us-content-block-1_pdzs1w.jpg';
const aboutUsContentBlock2 = 'dr85cqwlh/image/upload/v1727041978/about-us-content-block-2_oyeybq.jpg';
const aboutUsContentBlock3 = 'dr85cqwlh/image/upload/v1727041981/about-us-content-block-3_tjyipc.png';
const aboutUsContentBlock4 = 'dr85cqwlh/image/upload/v1727041983/about-us-content-block-4_gt1xes.png';

const AboutUsPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={620}
        buttonUrl="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVN8SzlOQriDI7QmxlJ0+VpnFGJfwHF54xXtrZRRZUn5L5mfJC40MRL0lUnnmjOkSQz80uMkmnVe97oLVpdOYczpycmdHicCwR9pjVvK8Bn8D3+256MmyOmRbM8igdhe/T3FZVOeteS7RFi8e4X5JhYU4CInSCGw7p5fN9N1lJAXoD2E3Z3OuMosbQQr35cYK0cw9N8dfKrpczpssSxgk0AjzdXg9qmyqpQPRZi2q0LDgNm5mWylaTLWlC0iEb7UIs9LIsucXwcMgdm+zw/XaTfAm96ZQ/QYc4fhiffU13GzbCJeM1/FRlOCr6/HQ8wE0Uy2IZDdN72xwXIH+IJ1fXw78s3WMz+NP18cgF/eUE4e9Leysy208I3//ezkk/MPB3Ziyi427eH5GkPEDHTHDNRmdqp3i9ZBhEvC/hwNOjPBb"
        buttonText={dict.aboutUs.hero.button}
        contentPosition="left"
        backgroundVideo={aboutUsMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.aboutUs.hero.title}</h2><p>${dict.aboutUs.hero.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        height={1000}
        featuredImage={aboutUsContentBlock1}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.aboutUs.ourJourney.title}</h2><p>${dict.aboutUs.ourJourney.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        height={540}
        featuredImage={aboutUsContentBlock2}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.aboutUs.cellularDetox.title}</h2><p>${dict.aboutUs.cellularDetox.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        height={800}
        featuredImage={aboutUsContentBlock3}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.aboutUs.treatmentPlans.title}</h2><p>${dict.aboutUs.treatmentPlans.text}</p>`
        }}
      />
      <LeadershipTeam name={dict.aboutUs.leadershipTeam.name} items={dict.aboutUs.leadershipTeam.items} />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        height={800}
        featuredImage={aboutUsContentBlock4}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.aboutUs.holistic.title}</h2><p>${dict.aboutUs.holistic.text}</p>`
        }}
      />
      <div className="py-4" style={{ backgroundColor: '#fff' }}>
        <Container className="p-3 affiliate-partners" style={{ color: '#aa9c91', border: '2px solid #aa9c91', borderRadius: '8px', textAlign: 'center' }}>
          <h2>Affiliate Partners</h2>
          <p>Grace Haven Medical works with established pharmacy and supply partners to support individualized, clinician-directed care. All listed pharmacy partners are LegitScript certified and adhere to applicable compliance requirements.</p>
          <div className="row g-4 text-start mt-1">
            <div className="col-md-6">
              <h4 className="text-center">Pharmacy Partners</h4>
              <ul>
                <li><strong>Nova Specialty Pharmacy</strong> <span className="text-muted">(White Label Pharmacy / SupplySync)</span></li>
                <li><strong>Empower Pharmacy</strong></li>
                <li><strong>Olympia Pharmaceuticals</strong></li>
                <li><strong>Wesley Pharmaceuticals</strong></li>
                <li><strong>Strive Compounding Pharmacy</strong></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="text-center">Preferred Supply Partners</h4>
              <ul>
                <li><strong>GenoGenix</strong></li>
                <li><strong>Hallandale Pharmacy</strong></li>
                <li><strong>Wells Pharmacy Network</strong></li>
              </ul>
              <p className="small mb-0">Vendor selection, prescribing, and dispensing are determined case by case by the treating clinician and applicable law.</p>
            </div>
          </div>
          <h5 className="mt-3"><strong>Our partners help us deliver safe, personalized care while maintaining an individualized clinical approach.</strong></h5>
        </Container>
      </div>
    </div>
  )
}

export default AboutUsPage;

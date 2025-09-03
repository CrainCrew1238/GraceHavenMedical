import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Memberships from '@/components/memberships.tsx';
import ContentBlock from '@/components/content-block.tsx';
import links from '../../lib/links.json';
import FeaturedPlan from '@/components/featured-plan.tsx';
import MediaBlock from '@/components/video-block.tsx';
import {getDictionary} from "@/lib/dictionaries.ts";
import {Great_Vibes} from "next/font/google";

const homeHeroVideo = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1723582827/663e8db2405f4d0ccf707fa1_AdobeStock_572169980_handbrake-transcode_if1rm6.mp4';
const homeContentBlock1 = 'dr85cqwlh/image/upload/v1723583866/home-content-block-1_hyy2wp.png';
const homeContentBlock2 = 'dr85cqwlh/image/upload/v1723585184/new_wave_weight_loss_pfzpzp.jpg';
const homeContentBlock3 = 'dr85cqwlh/image/upload/v1723637282/home-content-block-3_iyxxlt.png';
const homeContentBlock4 = 'dr85cqwlh/image/upload/v1723638804/home-content-block-4_a0g9be.png';
const homeContentBlock5 = 'dr85cqwlh/image/upload/v1723639594/home-content-block-5_sqnp4x.png';
const homeContentBlock6 = 'dr85cqwlh/image/upload/v1723824567/home-content-block-6_mlis09.png';
const homeContentBlock7 = 'dr85cqwlh/image/upload/v1723824570/home-content-block-7_mq1rmh.png';
const homeContentBlock8 = 'dr85cqwlh/image/upload/v1723824727/home-content-block-8_qfcrgt.png';

const homeMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1723638109/home-video-block-1_ei9dgk.mp4';
const homeMediaBlock2 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1723639927/home-video-block-2_ccvpxj.mp4';
const homeMediaBlock3 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1723824573/home-video-block-3_jiu6nq.mp4';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default async function HomePage() {
  const dict = await getDictionary();

  return (
    <div>
      <Container fluid className="m-0 p-0">
          <Container
              fluid
              style={{
                  position: 'relative',
                  display: 'grid',
                  alignItems: 'center',
                  minHeight: '72vh',
                  padding: 0,
                  overflow: 'hidden',
              }}
          >
              {/* Overlay */}
              <div
                  style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                          'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55))',
                      zIndex: 1,
                  }}
              />

              {/* Video Background */}
              <div
                  style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      zIndex: 0,
                      filter: 'blur(4px) brightness(1)', // 👈 blur + darken
                      transform: 'scale(1.05)', // slight scale so blur edges don’t show
                  }}
              >
                  <video
                      src={homeHeroVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                      }}
                  />
              </div>

              {/* Foreground Content */}
              <Container
                  style={{
                      position: 'relative',
                      zIndex: 2,
                      color: '#fff',
                      padding: 'clamp(40px, 8vh, 80px) 16px',
                      maxWidth: '980px',
                      textAlign: 'left',
                  }}
              >
                  <h1
                      style={{
                          margin: '0 0 12px 0',
                          fontWeight: 800,
                          lineHeight: 1.05,
                          letterSpacing: '-0.02em',
                          fontSize: 'clamp(32px, 4.6vw, 56px)',
                      }}
                  >
                      {dict.homePage.heroTitle1}
                  </h1>

                  <h2
                      style={{
                          margin: '0 0 18px 0',
                          fontWeight: 600,
                          lineHeight: 1.1,
                          letterSpacing: '-0.01em',
                          fontSize: 'clamp(18px, 2.2vw, 28px)',
                          color: 'rgba(255, 255, 255, 0.85)',
                      }}
                  >
                      {dict.homePage.heroTitle2}
                  </h2>

                  <p
                      className="text-start fs-5"
                      style={{
                          margin: '0 0 14px 0',
                          fontSize: 'clamp(16px, 1.25vw, 18px)',
                          lineHeight: 1.65,
                          color: 'rgba(255, 255, 255, 0.92)',
                      }}
                  >
                      {dict.homePage.heroText1}
                  </p>

                  <p
                      className="text-start"
                      style={{
                          margin: '0 0 14px 0',
                          fontSize: 'clamp(16px, 1.25vw, 18px)',
                          lineHeight: 1.65,
                          color: 'rgba(255, 255, 255, 0.92)',
                      }}
                  >
                      {dict.homePage.heroText2}
                  </p>

                  <p
                      className="text-start fs-6"
                      style={{
                          marginTop: '6px',
                          marginBottom: 0,
                          fontSize: 'clamp(15px, 1.15vw, 17px)',
                          lineHeight: 1.6,
                          color: '#d9f5ff',
                          borderLeft: '3px solid rgba(217, 245, 255, 0.6)',
                          paddingLeft: '10px',
                      }}
                  >
                      {dict.homePage.heroText3}
                  </p>

                  <Button
                      className="mt-4"
                      href={links.homeHero}
                      style={{
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          marginTop: '22px',
                          boxShadow:
                              '0 10px 24px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(0, 0, 0, 0.2)',
                          transition: 'transform 120ms ease, box-shadow 120ms ease',
                      }}
                  >
                      {dict.homePage.heroButton.toUpperCase()}
                  </Button>
              </Container>
          </Container>
          <ContentBlock
              bgColor="#fff"
              textColor="#aa9c91"
              buttonUrl="/weight-loss"
              buttonText={dict.homePage.contentBlocks.medicalWeightLoss.button}
              height={625}
              featuredImage={homeContentBlock1}
              imagePosition="right"
              imageWidth={600}
              sectionContent={{
                  __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.medicalWeightLoss.title}</h2><p>${dict.homePage.contentBlocks.medicalWeightLoss.text}</p>`
          }}
        />
        <Memberships/>
        <ContentBlock
          bgColor="#fff"
          textColor="#aa9c91"
          buttonUrl="https://newwaveweightloss.com/practitioner/insideout-medical-cellular-detox-weight-loss/"
          buttonText={dict.homePage.contentBlocks.newWave.button}
          button2Url="https://www.vagaro.com/cl/-gl5b-V4wx-HuDqrItlpvYHdkVp5WSZcgYtuL5zMunk="
          button2Text={dict.homePage.contentBlocks.newWave.button2}
          height={750}
          featuredImage={homeContentBlock2}
          imagePosition="left"
          imageWidth={600}
          sectionContent={{
            __html: `<p>${dict.homePage.contentBlocks.newWave.subtitle}</p><h2 class='mb-4'>${dict.homePage.contentBlocks.newWave.title}</h2><p>${dict.homePage.contentBlocks.newWave.text}</p>`
          }}
        />
        <FeaturedPlan planDetails={dict.homePage.featuredPlans.organicDetoxAndNewWave} />
        <ContentBlock
          bgColor="#fff"
          textColor="#aa9c91"
          buttonUrl="/iv-therapy"
          buttonText={dict.homePage.contentBlocks.IVTherapy.button}
          height={750}
          featuredImage={homeContentBlock3}
          imagePosition="right"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.IVTherapy.title}</h2><p>${dict.homePage.contentBlocks.IVTherapy.text}</p>`
          }}
        />
        <MediaBlock
          textColor="#fff"
          buttonUrl="https://apps.apple.com/app/mygrace-haven/id6501993778"
          buttonText={dict.homePage.contentBlocks.app.button}
          height={475}
          backgroundVideo={homeMediaBlock1}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.app.title}</h2><p>${dict.homePage.contentBlocks.app.text}</p>`
          }}
          contentPosition="left"
          button2Url="https://play.google.com/store/apps/details?id=com.ghmpatientportal.bodysite&hl=en_US&gl=US"
          button2Text={dict.homePage.contentBlocks.app.button2}
        />
        <ContentBlock
          bgColor="#f5f5f5"
          textColor="#aa9c91"
          buttonUrl="/infrared-therapy"
          buttonText={dict.homePage.contentBlocks.infraredTherapy.button}
          height={900}
          featuredImage={homeContentBlock4}
          imagePosition="right"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.infraredTherapy.title}</h2><p>${dict.homePage.contentBlocks.infraredTherapy.text}</p>`
          }}
        />
        <ContentBlock
          bgColor="#fff"
          textColor="#aa9c91"
          buttonUrl="/about-us"
          buttonText={dict.homePage.contentBlocks.wellness.button}
          height={750}
          featuredImage={homeContentBlock5}
          imagePosition="left"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.wellness.title}</h2><p>${dict.homePage.contentBlocks.wellness.text}</p>`
          }}
        />
        <MediaBlock
          textColor="#fff"
          buttonUrl="https://www.vagaro.com/gracehavenmedical/book-now"
          buttonText={dict.homePage.contentBlocks.mobile.button}
          height={600}
          backgroundVideo={homeMediaBlock2}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.mobile.title}</h2><p>${dict.homePage.contentBlocks.mobile.text}</p>`
          }}
          contentPosition="center"
          button2Url="/contact-us"
          button2Text={dict.homePage.contentBlocks.mobile.button2}
        />
        <ContentBlock
          bgColor="#f5f5f5"
          textColor="#aa9c91"
          buttonUrl="/magnet-therapy"
          buttonText={dict.homePage.contentBlocks.magnets.button}
          height={825}
          featuredImage={homeContentBlock6}
          imagePosition="right"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.magnets.title}</h2><p>${dict.homePage.contentBlocks.magnets.text}</p>`
          }}
        />
        <ContentBlock
          bgColor="#fff"
          textColor="#aa9c91"
          height={925}
          featuredImage={homeContentBlock7}
          imagePosition="left"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.footDetox.title}</h2><p>${dict.homePage.contentBlocks.footDetox.text}</p>`
          }}
        />
        <ContentBlock
          bgColor="#f5f5f5"
          textColor="#aa9c91"
          height={1050}
          featuredImage={homeContentBlock8}
          imagePosition="right"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.labTesting.title}</h2><p>${dict.homePage.contentBlocks.labTesting.text}</p>`
          }}
        />
        <MediaBlock
          textColor="#fff"
          buttonUrl="https://www.vagaro.com/cl/6IDvThwjPpMAkbPBXkYsoB~Gf2ey0UFIgSsiiTofqYY="
          buttonText={dict.homePage.contentBlocks.virtual.button}
          height={600}
          backgroundVideo={homeMediaBlock3}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.virtual.title}</h2><p>${dict.homePage.contentBlocks.virtual.text}</p>`
          }}
          contentPosition="center"
          button2Url="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVN8SzlOQriDI7QmxlJ0+VpnFGJfwHF54xXtrZRRZUn5L5mfJC40MRL0lUnnmjOkSQz80uMkmnVe97oLVpdOYczpycmdHicCwR9pjVvK8Bn8D3+256MmyOmRbM8igdhe/T3FZVOeteS7RFi8e4X5JhYU4CInSCGw7p5fN9N1lJAXoD2E3Z3OuMosbQQr35cYK0cw9N8dfKrpczpssSxgk0AjzdXg9qmyqpQPRZi2q0LDgNm5mWylaTLWlC0iEb7UIs9LIsucXwcMgdm+zw/XaTfAm96ZQ/QYc4fhiffU13GzbCJeM1/FRlOCr6/HQ8wE0Uy2IZDdN72xwXIH+IJ1fXw78s3WMz+NP18cgF/eUE4e9Leysy208I3//ezkk/MPB3Ziyi427eH5GkPEDHTHDNRmdqp3i9ZBhEvC/hwNOjPBb"
          button2Text={dict.homePage.contentBlocks.mobile.button2}
        />
      </Container>
    </div>
  );
}

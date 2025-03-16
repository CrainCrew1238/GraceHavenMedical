import { getDictionary } from './dictionaries'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import styles from "./page.module.css";
import Memberships from '@/components/memberships';
import ContentBlock from '@/components/content-block';
import links from './links.json';
import { RouteParams } from '@/types';
import FeaturedPlan from '@/components/featured-plan';
import MediaBlock from '@/components/video-block';

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

export default async function Home(props: RouteParams) {
  const dict = await getDictionary(props.params.lang);

  return (
    <div>
      <Container fluid className="m-0 p-0">
        <Container className={styles.heroSection} fluid>
          <div className={styles.heroOverlay} />
          <div className={styles.heroVideoWrapper}>
            <video className={styles.heroVideo} src={homeHeroVideo} autoPlay controls={false} loop muted />
          </div>
          <Container className={styles.heroContent} style={{ color: '#fff ' }}>
            <h1>{dict.homePage.heroTitle1}</h1>
            <h2>{dict.homePage.heroTitle2}</h2>
            <p className="text-start">{dict.homePage.heroText1}</p>
            <p className="text-start">{dict.homePage.heroText2}</p>
            <p className="text-start">{dict.homePage.heroText3}</p>
            <Button className="mt-3" target="_blank" href={links.homeHero}>
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
        <Memberships params={props.params} />
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
